<script lang="ts">
	import '../app.css';
	import { Pages } from '$lib';
	import { goto } from '$app/navigation';

	let current_page = Pages.Home;

	$: {
		console.log(current_page)
	}

	function redirect(page: Pages) {
		current_page = page;
		goto(page);
	}
</script>

<div class="flex-col bg-grey font-kallisto">
	<!-- Navbar -->
	<div class="flex w-full flex-row bg-light-grey">
		<div class="flex justify-start py-8 ps-8">
			<img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
		</div>

		<div class="flex-grow"></div>

		<div
			class="grid grid-cols-5 items-center justify-end py-4 pe-8 text-center text-2xl font-semibold"
		>
			{#if current_page == Pages.Home}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Home</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Home)}>Home</button>
			{/if}

			{#if current_page == Pages.Rules}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Rules</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Rules)}>Rules</button>
			{/if}

			{#if current_page == Pages.Teams}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Teams</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Teams)}>Teams</button>
			{/if}

			{#if current_page == Pages.Staff}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Staff</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Staff)}>Staff</button>
			{/if}

			{#if current_page == Pages.MapPools}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Map Pools</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.MapPools)}>Map Pools</button>
			{/if}
		</div>

		<div class="flex items-center justify-end py-4 pe-8">
			<button
				type="button"
				class="inline-flex h-[75px] w-[75px] items-center justify-center rounded-full bg-purple p-2"
				on:click={() => window.open('https://discord.gg/vyTc6TVr66', '_blank')}
				title="Join our Discord!"
			>
				<img src="/Discord_Icon.png" alt="Discord Logo" />
			</button>
		</div>
	</div>
	<slot />
	<!-- Footer -->
	<div class="grid h-full w-full flex-grow grid-cols-5 items-center bg-light-grey py-8 pe-4">
		<div class="mx-16 text-start text-2xl">
			<img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
			<p class="ms-4">© Copyright 2024</p>
			<p class="ms-4">All rights reserved</p>
		</div>
		<div class="grid h-fit grid-cols-1 gap-2">
			<p>Home</p>
			<p>Rules</p>
			<p>Teams</p>
			<p>Staff</p>
			<p>Map Pools</p>
		</div>
		<div class="col-span-2"></div>
		<div class="justfiy-end flex size-full items-end text-end">
			<p>
				Special thanks to <a class="underline" href="https://discord.gg/wEjMM5QZdK">Magnesium</a>
				and <a class="underline" href="https://discord.gg/yaQUsTXbYR">Challenge Saber</a>
			</p>
		</div>
	</div>
</div>
