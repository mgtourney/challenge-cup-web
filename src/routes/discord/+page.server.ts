import { db } from "$lib/server/db";
import { users } from "$lib/server/schema";

export async function load({ url }) {
    let avi = url.searchParams.get("avi");
    let name = url.searchParams.get("name");
    let id = url.searchParams.get("id");

    await db.insert(users).values({
        username: name!,
        avatar: avi!,
        discord_id: id!,
    });

    return {
        redirect: "/staff"
    }
}
