<script lang="ts">
	export let data;

    function downloadPool(pool: any) {
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        a.download = `Challenge_Cup_${pool.name}.bplist`;
        let blob = new Blob([pool.bplist], {type: 'octet/stream'});
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
    }
</script>

<div class="mx-48 flex flex-col">
	<div class="mb-[150px] mt-[200px] flex flex-row items-center">
		<img src="MapPools_Icon.png" alt="MapPool Icon" class="h-[200px]" />
		<div class="ms-16 flex flex-col text-8xl">
			<p class="text-6xl font-medium">Map Pools</p>
			<p class="font-bold">CHALLENGE CUP</p>
		</div>
	</div>

	<div class="mb-16 flex-col rounded-2xl bg-dark-grey py-4">
		{#each data.mappools as pool}
			<div class="mx-8 mt-4 flex flex-col rounded-2xl bg-grey py-4">
				<div class="flex flex-row items-center mx-8">
					<p class="rounded-2xl bg-purple px-4 py-2 text-center text-4xl font-bold">{pool.name}</p>
                    <p class="ms-4 text-2xl font-semibold">{pool.description}</p>
                    <div class="flex flex-grow" />
                    <button class="bg-dark-grey rounded-2xl px-4 py-2 text-center font-bold text-2xl flex-row flex" on:click={() => downloadPool(pool)}>
                        <img class="h-[32px] me-2" src="download.svg" alt="Download Icon"/>
                        <p>Download</p>
                    </button>
				</div>
				<div class="mx-8 mt-4 flex flex-col flex-wrap gap-4 bg-dark-grey rounded-2xl">
                    <div class="grid grid-cols-12 gap-4 items-center mx-4 justify-center pt-4">
                        <div />
                        <p class="text-2xl font-semibold col-span-2">Name</p>
                        <p class="text-2xl font-semibold col-span-2">Author</p>
                        <p class="text-2xl font-semibold col-span-2">Mapper</p>
                        <p class="text-2xl font-semibold col-span-2">Difficulty</p>
                        <p class="text-2xl font-semibold col-span-2">Hex</p>
                    </div>
                    <div class="divide-y-2 divide-light-grey px-4 pb-4">
                        {#each pool.maps as map}
                            <div class="grid grid-cols-12 gap-4 items-center">
                                <img class="h-[50px]" src={map.icon} alt="Map icon"/>
                                <p class="text-xl col-span-2">{map.name}</p>
                                <p class="text-xl col-span-2">{map.author}</p>
                                <p class="text-xl col-span-2">{map.mapper}</p>
                                <p class="text-xl col-span-2">{map.diff}</p>
                                <a class="text-xl col-span-2 underline" href="https://beatsaver.com/maps/{map.hex}">{map.hex}</a>
                            </div>
                        {/each}
                    </div>
				</div>
			</div>
		{/each}
	</div>
</div>
