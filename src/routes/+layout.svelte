<script lang="ts">
    import "../app.css";
</script>

<div class="bg-purple h-screen font-kumbh">
    <!-- Title Bar -->
    <div class=" fixed top-0 w-full h-[16%] bg-darkPurple">
        <div class="flex flex-row justify-center items-center mt-2 mb-2">
            <img src="/titlebar_logo.png" alt="Logo" class="w-[289px] h-[15vh]"/>
        </div>
    </div>

    <!-- Nav Bar -->
    <div class="fixed top-[18%] w-full px-12 h-[6%]">
        <div class="grid grid-cols-3 w-full h-full border-4 border-darkPurple text-white text-2xl font-bold items-center rounded-xl">
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
    <div class="fixed top-[22.5%] overflow-clip">
        <slot />
    </div>
</div>