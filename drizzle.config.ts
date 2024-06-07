import { defineConfig } from 'drizzle-kit';

console.log(process.env);

export default defineConfig({
    schema: './src/lib/server/schema.ts',
    out: './src/drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    }
});
