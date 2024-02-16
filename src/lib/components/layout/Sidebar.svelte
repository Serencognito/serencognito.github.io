<script lang="ts">
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import FaRegularCopy from '~icons/fa-regular/copy';
	import OcticonGitBranch24 from '~icons/octicon/git-branch-24';
	import ClarityCogLine from '~icons/clarity/cog-line';
	import { filesList } from '$lib/util/files-list.svelte';
	import { editorsList } from '$lib/util/editors-list.svelte';
	import type { RouteFile } from '$lib/models/route-file';
	import { goto } from '$app/navigation';

	let currentTile = $state(0);

	function openFile(file: RouteFile) {
		editorsList.activeEditor?.openFile(file);

		goto(file.route);
	}
</script>

<div class="flex h-full cursor-pointer gap-2">
	<div class="flex w-fit flex-col gap-2">
		{#each filesList.files as file}
			<div
				class="flex flex-nowrap items-center gap-2 overflow-hidden text-sm
                hover:text-surface-700-200-token"
				on:click={() => openFile(file)}
				on:keypress={() => openFile(file)}
				role="menuitem"
				tabindex="0"
			>
				<svelte:component this={file.icon} style={file.iconStyle} />
				<span>{file.name}</span>
			</div>
		{/each}
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
