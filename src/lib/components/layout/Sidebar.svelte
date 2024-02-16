<script lang="ts">
	import { Accordion, AccordionItem, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import FaRegularCopy from '~icons/fa-regular/copy';
	import OcticonGitBranch24 from '~icons/octicon/git-branch-24';
	import ClarityCogLine from '~icons/clarity/cog-line';
	import { filesList } from '$lib/util/files-list.svelte';
	import { editorsList } from '$lib/util/editors-list.svelte';
	import type { RouteFile } from '$lib/models/route-file';
	import { goto } from '$app/navigation';
	import PhCaretRightLight from '~icons/ph/caret-right-light';

	let currentTile = $state(0);
	let expandedRoutes: string[] = $state(['root']);

	function isOpen(route: string) {
		return expandedRoutes.includes(route);
	}

	function toggle(route: string) {
		if (isOpen(route)) {
			expandedRoutes = expandedRoutes.filter((r) => r !== route);
		} else {
			expandedRoutes = [...expandedRoutes, route];
		}
	}

	function openFile(file: RouteFile) {
		editorsList.activeEditor?.openFile(file);

		goto(file.route);
	}
</script>

<div class="flex h-full cursor-pointer gap-2">
	<Accordion>
		<AccordionItem
			class="text-sm font-extrabold"
			regionCaret="hidden"
			regionPanel="pl-10 pt-0"
			regionControl="pb-0"
			hover=""
			transitionInParams={{ duration: 150 }}
			transitionOutParams={{ duration: 150 }}
			open
			on:toggle={() => toggle('root')}
		>
			<svelte:fragment slot="summary">
				<span
					class="border-surface-700-200-token flex items-center gap-0.5
                        border-opacity-5 p-1 active:border"
				>
					<PhCaretRightLight
						class="{isOpen('root') ? 'rotate-90' : ''} duration-50 transition-transform"
					/>
					SERENCOGNITO.GITHUB.IO
				</span>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="flex w-fit flex-col gap-2">
					{#each filesList.files as file}
						<div
							class="flex flex-nowrap items-center gap-2 overflow-hidden text-sm font-light
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
			</svelte:fragment>
		</AccordionItem>
	</Accordion>

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
