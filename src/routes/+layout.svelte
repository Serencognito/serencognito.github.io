<script lang="ts">
	import '../app.pcss';
	import { AppBar, AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import LightSwitch from '$lib/components/ui/LightSwitch.svelte';
	export let currentTile = 0;

	export let data: LayoutData;
</script>

<AppShell class="h-screen">
	<svelte:fragment slot="header">
		<AppBar background="surface-50 dark:surface-500" padding="px-8 py-1">Open Files</AppBar>
		<AppBar background="surface-50 dark:surface-500" padding="px-4 py-1">
			<span class="hover:text-surface-800-100-token">src</span>
			&gt;
			<span class="hover:text-surface-800-100-token">routes</span>
			&gt;
			<span class="hover:text-surface-800-100-token"> about.me </span>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight">
		<div class="flex h-full gap-2">
			<div class="flex flex-col">
				<span>File 1</span>
				<span>File 2</span>
			</div>

			<AppRail background="surface-50 dark:surface-500" width="w-12">
				<svelte:fragment slot="lead">
					<AppRailAnchor href="/">(icon)</AppRailAnchor>
				</svelte:fragment>
				<!-- --- -->
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					<span>Tile 1</span>
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					<span>Tile 2</span>
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					<span>Tile 3</span>
				</AppRailTile>
				<!-- --- -->
				<svelte:fragment slot="trail">
					<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
					<LightSwitch />
				</svelte:fragment>
			</AppRail>
		</div>
	</svelte:fragment>

	<slot />
</AppShell>
