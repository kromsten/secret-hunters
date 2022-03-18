<script lang="ts">
	import Effects from "../components/effects.svelte";
	import Pages from "../components/pages.svelte"
</script>


<div class="">
	<Pages />
	<Effects />
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