<script lang="ts">
    import "../app.css";
</script>

<div class="bg-grey font-kumbh size-fit flex-col">
    <!-- Navbar -->
    <div class="bg-light-grey flex flex-row w-full">
        <div class="flex justify-start py-4 ps-8">
            <img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
        </div>

        <div class="flex flex-row justify-end items-center text-center gap-4 text-2xl font-semibold flex-grow py-4 pe-8">
            <p>Home</p>
            <p>Rules</p>
            <p>Teams</p>
            <p>Staff</p>
            <p>Map Pools</p>
        </div>

        <div class="flex justify-end py-4 pe-8 items-center">
            <button type="button" class="bg-purple rounded-full p-2 inline-flex items-center justify-center w-[75px] h-[75px]" on:click={() => window.open("https://discord.gg/vyTc6TVr66", "_blank")} title="Join our Discord!">
                <img src="/discord-mark-white.svg" alt="Discord Logo" class="h-[30px]" />
            </button>
        </div>
    </div>
    <slot />
    <!-- Footer -->
    <div class="bg-light-grey grid grid-cols-5 w-full items-center py-8 flex-grow h-full">
        <div class="mx-16 text-start text-2xl">
            <img src="/logo_and_text.png" alt="BSCC Logo" class="h-[75px]" />
            <p class="ms-4">© Copyright 2024</p>
            <p class="ms-4">All rights reserved</p>
        </div>
        <div class="grid grid-cols-1 h-fit gap-2">
            <p>Home</p>
            <p>Rules</p>
            <p>Teams</p>
            <p>Staff</p>
            <p>Map Pools</p>
        </div>
        <div class="col-span-2"></div>
        <div class="flex size-full justfiy-end items-end text-end">
            <p>Special thanks to <a class="underline" href="https://discord.gg/wEjMM5QZdK">Magnesium</a> and <a class="underline" href="https://discord.gg/yaQUsTXbYR">Challenge Saber</a></p>
        </div>
    </div>
</div>