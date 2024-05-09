<script lang="ts">
	import '../app.css';
</script>

<div class="flex-col bg-grey font-kumbh">
	<!-- Navbar -->
	<div class="flex w-full flex-row bg-light-grey">
		<div class="flex justify-start py-4 ps-8">
			<img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
		</div>

		<div
			class="flex flex-grow flex-row items-center justify-end gap-4 py-4 pe-8 text-center text-2xl font-semibold"
		>
			<p>Home</p>
			<p>Rules</p>
			<p>Teams</p>
			<p>Staff</p>
			<p>Map Pools</p>
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
