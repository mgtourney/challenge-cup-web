<script lang="ts">
	import '../app.css';
	import { Pages } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { currentPage } from '$lib';

	function redirect(page: Pages) {
		$currentPage = page;
		goto(page);
	}

	onMount(() => {
		let page = window.location.pathname;
		console.log(page);
		switch (page) {
			case '/':
				$currentPage = Pages.Home;
				break;
			case '/rules':
				$currentPage = Pages.Rules;
				break;
			case '/teams':
				$currentPage = Pages.Teams;
				break;
			case '/staff':
				$currentPage = Pages.Staff;
				break;
			case '/mappools':
				$currentPage = Pages.MapPools;
				break;
		}
	});
</script>

<div class="flex-col bg-grey font-kallisto">
	<!-- Navbar -->
	<div class="flex w-full flex-row bg-light-grey">
		<div class="flex justify-start py-8 ps-8">
			<button type="button" on:click={() => redirect(Pages.Home)}>
				<img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
			</button>
		</div>

		<div class="flex-grow"></div>

		<div
			class="grid grid-cols-5 items-center justify-end py-4 pe-8 text-center text-2xl font-semibold"
		>
			{#if $currentPage == Pages.Home}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Home</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Home)}>Home</button>
			{/if}

			{#if $currentPage == Pages.Rules}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Rules</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Rules)}>Rules</button>
			{/if}

			{#if $currentPage == Pages.Teams}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Teams</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Teams)}>Teams</button>
			{/if}

			{#if $currentPage == Pages.Staff}
				<div class="grid grid-rows-2 pt-8">
					<p class="font-bold">Staff</p>
					<div class="ms-[25%] h-0 w-[50%] rounded-full border-2 border-purple bg-purple"></div>
				</div>
			{:else}
				<button type="button" on:click={() => redirect(Pages.Staff)}>Staff</button>
			{/if}

			{#if $currentPage == Pages.MapPools}
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
				<img src="/discord-mark-white.svg" alt="Discord Logo" class="h-[35px]" />
			</button>
		</div>
	</div>
	<slot />
	<!-- Footer -->
	<div class="flex flex-row h-full w-full items-center bg-light-grey py-8 pe-4">
		<div class="mx-16 text-start text-2xl w-fit">
			<img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
			<p class="ms-4">© Copyright 2024</p>
			<p class="ms-4">All rights reserved</p>
		</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="grid h-fit grid-cols-1 gap-2">
			<a role="button" tabindex=0 on:click={() => redirect(Pages.Home)} on:keydown={(e) => e.key === 'Enter' && redirect(Pages.Home)}>Home</a>
			<a role="button" tabindex=0 on:click={() => redirect(Pages.Rules)} on:keydown={(e) => e.key === 'Enter' && redirect(Pages.Rules)}>Rules</a>
			<a role="button" tabindex=0 on:click={() => redirect(Pages.Teams)} on:keydown={(e) => e.key === 'Enter' && redirect(Pages.Teams)}>Teams</a>
			<a role="button" tabindex=0 on:click={() => redirect(Pages.Staff)} on:keydown={(e) => e.key === 'Enter' && redirect(Pages.Staff)}>Staff</a>
			<a role="button" tabindex=0 on:click={() => redirect(Pages.MapPools)} on:keydown={(e) => e.key === 'Enter' && redirect(Pages.MapPools)}>Map Pools</a>
		</div>
		<div class="justfiy-end flex flex-grow text-end justify-end h-[155px] items-end me-4">
			<p>
				Special thanks to <a class="underline" href="https://discord.gg/wEjMM5QZdK">Magnesium</a>
				and <a class="underline" href="https://discord.gg/yaQUsTXbYR">Challenge Saber</a>
			</p>
		</div>
	</div>
</div>
