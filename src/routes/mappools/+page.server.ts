import { db } from "$lib/server/db";
import { mappools, maps } from "$lib/server/schema";
import { eq } from "drizzle-orm";

export async function load() {
    let m = await db.select({
        name: mappools.name,
        description: mappools.description,
        map_ids: mappools.maps,
        bplist: mappools.bplist,
    }).from(mappools);

    let promise = m.map(async (mappool) => {
        //random delay
        let delay = Math.floor(Math.random() * 300);

        let our_maps: any[] = mappool.map_ids.map(id => {
            let map: any = db.select({
                hex: maps.hex,
                diff: maps.diff,
            }).from(maps).where(eq(maps.id, id)).limit(1);
            return map[0];
        })

        let comma_separated = our_maps.map(map => map.hex).join(',');

        let map_data = await fetch(`https://api.beatsaver.com/maps/ids/${comma_separated}`);

        if (!map_data.ok) {
            console.error(`Failed to fetch map ${comma_separated}`);
            console.log(await map_data.text());
            return {name: "Unknown", author: "Unknown", mapper: "Unknown", icon: "https://placehold.co/400", diff: "Unknown", hex: comma_separated};
        }

        let map_json = await map_data.json();

        let promise = map_json.docs.map(async (data: any, index: number) => {
            return {name: data.metadata.songName, author: data.metadata.songAuthorName, icon: data.versions[data.versions.length - 1].coverURL, mapper: data.metadata.levelAuthorName, diff: our_maps[index].diff, hex: our_maps[index].hex};
        });

        let mp = <{name: string, description: string, bplist: string, maps: {name: string, author: string, icon: string, mapper: string, diff: string, hex: string}[]}><unknown>mappool;

        mp.maps = await Promise.all(promise);

        return mp;
    });

    return {
        mappools: await Promise.all(promise)
    }
}