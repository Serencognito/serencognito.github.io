<script lang="ts">
	import '../app.pcss';
	import { AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import FaRegularCopy from '~icons/fa-regular/copy';
	import OcticonGitBranch24 from '~icons/octicon/git-branch-24';
	import ClarityCogLine from '~icons/clarity/cog-line';
	import TopBar from '$lib/components/layout/TopBar.svelte';

	let currentTile = $state(0);
</script>

<AppShell class="h-screen">
	<svelte:fragment slot="header">
		<TopBar />
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
