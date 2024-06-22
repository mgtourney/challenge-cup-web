import { db } from '$lib/server/db.js'
import { players, teams } from '$lib/server/schema'

interface Team {
    id: string;
    name: string;
    avatar: string;
    sort_id: number;
    players: {
        game_id: string;
        avatar: string;
        name: string;
        captian: boolean;
    }[];

}

export async function load() {
    const pt = await db.select({
        game_id: players.game_id,
        captian: players.captian,
        team: players.team_id,
    }).from(players);

    const t = await db.select({
        id: teams.id,
        name: teams.name,
        avatar: teams.avatar,
        sort_id: teams.sort_id,
    }).from(teams);

    let promise = t.map(async (team) => {
        let t = <Team>team;
        let promise = pt.filter(player => player.team === team.id).map(async (player) => {
            let res = await fetch(`https://api.beatleader.xyz/player/${player.game_id}`);
            if (res.ok) {
                let data = await res.json();
                return {name: data.name, game_id: player.game_id, avatar: data.avatar, captian: player.captian};
            } else {
                let res = await fetch(`https://scoresaber.com/api/player/${player.game_id}/basic`)
                if (res.ok) {
                    let data = await res.json();
                    return {name: data.name, game_id: player.game_id, avatar: data.profilePicture, captian: player.captian};
                } else {
                    return {name: "Unknown", game_id: player.game_id, avatar: "https://placehold.co/400", captian: player.captian};
                }
            }
        });

        t.players = await Promise.all(promise);

        // put the captian first
        t.players.sort((a, b) => a.captian || b.captian ? 0 : -1);

        return t;
    });

    return {
        teams: (await Promise.all(promise)).sort((a, b) => a.sort_id - b.sort_id)
    }
}