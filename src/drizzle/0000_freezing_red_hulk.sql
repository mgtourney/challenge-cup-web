DO $$ BEGIN
 CREATE TYPE "public"."staff_types" AS ENUM('Organizers', 'Head Coordinator', 'Head Map Pooler', 'Head Caster', 'Coordinator', 'Map Pooler', 'Stream Caster', 'Special Thanks & Other Staff');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mappools" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"bplist" text NOT NULL,
	"maps" uuid[] NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "maps" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hex" varchar NOT NULL,
	"diff" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"game_id" varchar NOT NULL,
	"team_id" uuid NOT NULL,
	"captian" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"avatar" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar NOT NULL,
	"discord_id" varchar NOT NULL,
	"avatar" varchar NOT NULL,
	"role" "staff_types",
	CONSTRAINT "users_discord_id_unique" UNIQUE("discord_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "players" ADD CONSTRAINT "players_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
