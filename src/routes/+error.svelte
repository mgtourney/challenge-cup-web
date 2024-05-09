<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-full w-full flex-col items-center justify-center pr-5 text-3xl font-bold">
	<!-- {JSON.stringify($page)} -->
	<div class="grid grid-cols-2 divide-x-2">
		<div class="flex flex-row-reverse pr-4">
			{$page.status}
		</div>
		<div class="pl-4">
			{$page.error?.message}
		</div>
	</div>
</div>
