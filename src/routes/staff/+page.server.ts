import { db } from '$lib/server/db.js'
import { users } from '$lib/server/schema.js'
import { isNotNull } from 'drizzle-orm';


export async function load() {
    const dbUsers = await db.select({
        name: users.username,
        avatar: users.avatar,
        role: users.role
    }).from(users).where(isNotNull(users.role));

    return {
        users: dbUsers
    }
}