import { db } from "$lib/server/db";
import { mappools, maps } from "$lib/server/schema";
import { eq } from "drizzle-orm";

interface Mappool {
    name: string;
    description: string;
    bplist: string;
    sort_id: number;
    maps: {
        name: string
        author: string
        icon: string
        mapper: string
        diff: string
        hex: string
    }[]
}

export async function load() {
    let m = await db.select({
        name: mappools.name,
        description: mappools.description,
        map_ids: mappools.maps,
        bplist: mappools.bplist,
        sort_id: mappools.sort_id,
    }).from(mappools);

    let promise = m.map(async (mappool) => {
        //random delay
        let delay = Math.floor(Math.random() * 300);

        let promise2 =  mappool.map_ids.map(async id => {
            let map = db.select({
                hex: maps.hex,
                diff: maps.diff,
            }).from(maps).where(eq(maps.id, id)).limit(1);
            return await map;
        })
        
        let our_maps = await Promise.all(promise2);

        let comma_separated = our_maps.map(map => map[0].hex).join(",");

        let map_data = await fetch(`https://api.beatsaver.com/maps/ids/${comma_separated}`);

        if (!map_data.ok) {
            console.error(`Failed to fetch map ${comma_separated}`);
            console.log(await map_data.text());
            return {name: "Unknown", author: "Unknown", mapper: "Unknown", icon: "https://placehold.co/400", diff: "Unknown", hex: comma_separated};
        }

        let map_json = await map_data.json();
        // console.log(map_json);

        let promise = our_maps.map(async map => {
            let hex = map[0].hex;
            // console.log(map_json[hex].metadata.songName);
            return {name: map_json[hex].metadata.songName, author: map_json[hex].metadata.songAuthorName, icon: map_json[hex].versions[0].coverURL, mapper: map_json[hex].metadata.levelAuthorName, diff: map[0].diff, hex: hex};
        })

        let mp = <Mappool><unknown>mappool;

        mp.maps = await Promise.all(promise);

        return mp;
    });

    return {
        mappools: (await Promise.all(promise)).sort((a, b) => a.sort_id - b.sort_id)
    }
}