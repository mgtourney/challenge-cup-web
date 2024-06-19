<script lang="ts">
    export let data;
</script>

<div class="mx-48 flex flex-col">
	<div class="mb-[150px] mt-[200px] flex flex-row items-center">
		<img src="Teams_Icon.png" alt="Teams Icon" class="h-[200px]" />
		<div class="ms-16 flex flex-col text-8xl">
			<p class="text-6xl font-medium">Teams & Players</p>
			<p class="font-bold">CHALLENGE CUP</p>
		</div>
	</div>

	<div class="rounded-2xl bg-dark-grey flex-col py-4 mb-16">
        {#each data.teams as team, i}
            <div class="flex bg-grey flex-col mx-8 mt-4 rounded-2xl py-2">
                <div class="flex flex-row items-center">
                    <p class="text-6xl font-bold ms-4">i</p>
                    <img src={team.avatar} alt="Team avatar" class="h-[100px] rounded-2xl mx-4" />
                    <p class="text-4xl font-bold bg-purple rounded-2xl py-2 px-4 text-center">{team.name}</p>
                </div>
                <div class="flex flex-row flex-wrap gap-4 mx-8 mt-4">
                    {#each team.players as player}
                        <div class="flex flex-row bg-dark-grey rounded-2xl py-2 px-4 items-center min-w-[30%]">
                            <img src={player.avatar} alt="Player Avatar" class="h-[52px] rounded-2xl" />
                            <div class="flex flex-col">
                                <p class="text-2xl font-semibold ms-4">{player.name}</p>
                                <p class="text-xl ms-4">{player.captian? "Captain" : "Player"}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
        <p class="mx-8 mt-2">Note: Seeds have been replaced with * as they have not been released yet.</p>
    </div>

</div>