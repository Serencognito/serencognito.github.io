<script lang="ts">
	import '../app.pcss';
	import { AppBar, AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import LightSwitch from '$lib/components/ui/LightSwitch.svelte';
	export let currentTile = 0;
	import FaRegularCopy from '~icons/fa-regular/copy';
	import OcticonGitBranch24 from '~icons/octicon/git-branch-24';
	import CibSvelte from '~icons/cib/svelte';
	import ClarityCogLine from '~icons/clarity/cog-line';
	export let data: LayoutData;
</script>

<AppShell class="h-screen">
	<svelte:fragment slot="header">
		<AppBar background="surface-50 dark:surface-500" class="w-full" padding="px-8 py-1">
			<svelte:fragment slot="lead">
				<section id="openFiles" class=" grid grid-flow-col gap-2 gap-x-2 divide-x divide-dotted">
					<span class="hover:text-surface-800-100-token">about.me</span>
					<span class="pl-2 hover:text-surface-800-100-token">located.at</span>
					<span class="flex items-center justify-between pl-2 hover:text-surface-800-100-token">
						<CibSvelte class="text-orange-700" />MadeWith.svelte</span
					>
				</section>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
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
			<div class="border-surface-300-600-token flex w-48 flex-col border-l">
				<span class="mx-auto">File 1</span>
				<span class="mx-auto">File 2</span>
			</div>

			<AppRail
				background="surface-50 dark:surface-500"
				width="w-12"
				active=""
				hover="text-surface-600-300-token hover:text-surface-800-100-token"
			>
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
					<FaRegularCopy class="h-1/2 w-1/2" />
				</AppRailTile>
				<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
					<OcticonGitBranch24 class="h-1/2 w-1/2" />
				</AppRailTile>
				<!-- --- -->
				<svelte:fragment slot="trail">
					<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
						<ClarityCogLine class="h-1/2 w-1/2" />
					</AppRailTile>
				</svelte:fragment>
			</AppRail>
		</div>
	</svelte:fragment>

	<slot />
</AppShell>
