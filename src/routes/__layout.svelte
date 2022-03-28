<script lang="ts">
	import Effects from "../components/effects.svelte";
	
	import { onMount } from "svelte";
	
	import { web3state } from "../ts/stores"
	import { formatAddress } from "../ts/utils";

	let connected : boolean;

	const setupKeplr = () => {
		web3state.setupKeplr()
		.then(() => connected = web3state.connected )
		.catch(e => { console.error(e) })
	}
	
	onMount(() => {
		const conn : string | null  = localStorage.getItem("connected");
		if (conn  === "true") setupKeplr();
	})


</script>


	<header class="navbar navbar-dark bg-dark">
		<div class="container-fluid">
			<a href="/" class="navbar-brand">Secret Hunters</a>
			
			<div>
				{ #if connected}
				
				<button class="btn">
					{ formatAddress( web3state.address) }
				</button>

				{ :else }
					<button class="btn btn-outline-light" on:click={()=>setupKeplr()}>Keplr Connect</button>
				{/if }
			</div>

		</div>
	</header>



<main class="container">
	<slot />
</main>
<Effects />




<style>
	header { z-index: 5; }
	main { overflow: hidden; }

	/* footer {
		padding: 7vh 0;
		background-color: var(--primary);
		left: 0;
		bottom: 0;
		width: 100%;
		margin-top: 20vh;
	}

	.icon-wrapper {
		display: flex;
		gap: 1vw;
		justify-content: end;
		margin-right: 8vw;
	} */

	/* :global(header, .transparent) {
		background-color: rgba(0, 0, 0, 0)!important;
	}

	:global(header a, header button) {
		color: #1565c0 
		!important;
	} */
	
</style>
