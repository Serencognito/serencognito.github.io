<script lang="ts">
	import { autoModeWatcher, modeCurrent, setModeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import LineMdSunnyOutlineToMoonTransition from '~icons/line-md/sunny-outline-to-moon-transition';
	import LineMdMoonToSunnyOutlineTransition from '~icons/line-md/moon-to-sunny-outline-transition';

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
		<LineMdMoonToSunnyOutlineTransition />
	{:else}
		<LineMdSunnyOutlineToMoonTransition />
	{/if}
</button>
