import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import '../../drizzle/meta/_journal.json';

// try {
//     const migrationClient = postgres(process.env.POSTGRES_URL!, { max: 1});
//     migrate(drizzle(migrationClient), { migrationsFolder: './src/drizzle' });
// } catch (e) {
//     console.error(e);
// }

const queryClient = postgres(process.env.POSTGRES_URL!);

export const db = drizzle(queryClient);