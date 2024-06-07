<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        goto(data.redirect);
    });
</script>