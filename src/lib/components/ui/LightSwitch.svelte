<script lang="ts">
	import { autoModeWatcher, modeCurrent, setModeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const toggleMode = () => {
		setModeCurrent(!$modeCurrent);
	};
	onMount(() => {
		autoModeWatcher();
	});
</script>

<!-- <svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head> -->

<button on:click={() => toggleMode()}>
	{#if $modeCurrent}
		Dark
	{:else}
		Light
	{/if}
</button>
