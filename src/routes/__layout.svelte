<script lang="ts">
	import Button from '@smui/button';
	import TopAppBar, {
		Row,
		Section,
		AutoAdjust,
		TopAppBarComponentDev
	} from '@smui/top-app-bar';



	/* import SocialIcons from "@rodneylab/svelte-social-icons"; */
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

	let topAppBar: TopAppBarComponentDev;

</script>

<TopAppBar bind:this={topAppBar} >
	<Row>
		<Section>
			<Button variant="text" ripple={true}   href="/">
				Secret Hunters
			</Button>
		</Section>


		<Section align="end" toolbar>

			{ #if connected}
				
				<Button href="/mint" color="secondary">Mint</Button>

				<Button href="/collection">My Collection</Button>

				<Button>
					{ formatAddress( web3state.address) }
				</Button>

			{ :else }
				<Button on:click={()=>setupKeplr()}>Keplr Connect</Button>
			{/if }



		</Section>
	</Row>
</TopAppBar>

<main class="">
	<slot />
</main>
<!-- <AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
</AutoAdjust> -->


<!-- <footer>
	<div class="icon-wrapper">
	</div>
</footer> -->

<style>

	main {
		overflow: hidden;
	}

	footer {
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
	}

	/* :global(header, .transparent) {
		background-color: rgba(0, 0, 0, 0)!important;
	}

	:global(header a, header button) {
		color: #1565c0 
		!important;
	} */
	
</style>
