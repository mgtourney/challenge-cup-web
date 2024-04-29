<script lang="ts">
    import "../app.css";
</script>

<div class="flex flex-col justify-center items-center bg-purple gap-[12px] overflow-hidden h-screen">
    <!-- Title Bar -->
    <div class="flex flex-row justify-center items-center w-full h-[16vh] bg-darkPurple">
        <img src="/titlebar_logo.png" alt="Logo" class="w-[289px] h-[15vh]"/>
    </div>

    <!-- Nav Bar -->
    <div class="px-24 w-full">
        <div class="grid grid-cols-3 w-full border-4 border-darkPurple text-white text-lg font-bold">
            <!-- Main Page -->
            <div class="flex itmes-center justify-center">
                <a href="/">Main Page</a>
            </div>
            <!-- Players and Staff -->
            <div class="flex itmes-center justify-center">
                Players and Staff
            </div>
            <!-- Rules -->
            <div class="flex itmes-center justify-center">
                Rules
            </div>
        </div>
    </div>

    <!-- Body -->
    <div class="h-[78vh] overflow-clip">
        <slot />
    </div>
</div>