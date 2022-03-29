<script lang="ts">
	import Timer from "../components/timer.svelte";
	import Mint from "../components/mint.svelte"
</script>


<div class="container">

	{#if new Date() > new Date(2022,3,4) }
		<Timer />
	{ :else }
		<Mint />
	{/if}
</div>



 
<style>

	div {
		overflow: hidden;
	}

	:global(.center) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	:global(.smui-paper) {
		padding: auto 0;
	}

	:global(img) {
		border-radius: 15%;
	}

	.flexcont {
		display: flex;
		flex-direction: column;
		gap: 17vh;
	}
  </style>