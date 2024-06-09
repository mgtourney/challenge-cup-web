<script lang="ts">
	export let data;

	let types = [
		...new Set(
			data.users
                .filter((user) => user.role !== null)
				.map((user) => user.role!)
		)
	];

    let callback = "https://discord.com/oauth2/authorize?response_type=token&client_id=1248556424582270986&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Fbschallengecup.xyz%2Fdiscord%2Fcallback&scope=identify"
</script>

<div class="mx-48 flex flex-col">
	<div class="mb-[150px] mt-[200px] flex flex-row items-center">
		<img src="Staff_Icon.png" alt="Staff Icon" class="h-[200px]" />
		<div class="ms-16 flex flex-col text-8xl">
			<p class="text-6xl font-medium">Staff Team</p>
			<p class="font-bold">CHALLENGE CUP</p>
		</div>
	</div>

	<div class="rounded-2xl bg-dark-grey flex-col py-4 mb-16">
        {#each types as type}
            <div class="flex bg-grey flex-col mx-8 my-4 rounded-2xl py-4">
                <div class="flex flex-row items-center">
                    <div class="rounded-full bg-purple h-[20px] w-[20px] ms-8 me-4" />
                    <p class="text-4xl font-bold bg-purple rounded-2xl py-2 px-4 text-center">{type}</p>
                </div>
                <div class="flex flex-row flex-wrap gap-4 mx-8 mt-4">
                    {#each data.users.filter((user) => user.role === type) as user}
                        <div class="flex flex-row bg-dark-grey rounded-2xl py-2 px-4 items-center min-w-[30%]">
                            <img src={user.avatar} alt="Staff Avatar" class="h-[52px] rounded-2xl" />
                            <p class="text-2xl font-semibold ms-4">{user.name}</p>
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="flex flex-row items-center justify-center">
                <p class="text-4xl font-bold">No staff members found.</p>
            </div>
        {/each}
        </div>
    <div class="flex w-full flex-row-reverse text-sm text-light-grey">
        <a href={callback}>Staff Login</a>
    </div>
</div>
