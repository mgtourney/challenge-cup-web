<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    let token = "";

    onMount(async () => {
        let hash = window.location.hash;
        console.log(hash);
        token = hash.split("&")[1].split("=")[1];

        let res = await fetch("https://discord.com/api/users/@me", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        let user = await res.json();
    
        let name = encodeURIComponent(user.global_name);
        let id = user.id;
        let avi = encodeURIComponent(`https://cdn.discordapp.com/avatars/${id}/${user.avatar}.png`);

        goto(`/discord?name=${name}&id=${id}&avi=${avi}`);
    });
</script>

waiting!...