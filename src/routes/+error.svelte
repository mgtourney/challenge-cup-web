<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="w-full h-full flex flex-col justify-center items-center text-3xl font-bold pr-5">
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