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

        let promise = mappool.map_ids.map(async (id) => {
            let map = await db.select({
                hex: maps.hex,
                diff: maps.diff,
            }).from(maps).where(eq(maps.id, id)).limit(1);

            // add a random cool down to prevent rate limiting
            await new Promise(resolve => setTimeout(resolve, Math.random() * 100));

            let res = await fetch(`https://api.beatsaver.com/maps/id/${map[0].hex}`);
            if (res.ok) {
                let data = await res.json();
                return {name: data.metadata.songName, author: data.metadata.songAuthorName, icon: data.versions[data.versions.length - 1].coverURL, mapper: data.metadata.levelAuthorName, diff: map[0].diff, hex: map[0].hex};
            } else {
                return {name: "Unknown", author: "Unknown", mapper: "Unknown", icon: "https://placehold.co/400", diff: "Unknown", hex: map[0].hex};
            }
        });

        let mp = <{name: string, description: string, bplist: string, maps: {name: string, author: string, icon: string, mapper: string, diff: string, hex: string}[]}><unknown>mappool;

        mp.maps = await Promise.all(promise);

        return mp;
    });

    return {
        mappools: await Promise.all(promise)
    }
}