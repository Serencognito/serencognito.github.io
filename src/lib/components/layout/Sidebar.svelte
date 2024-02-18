<script lang="ts">
	import { Accordion, AccordionItem, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import FaRegularCopy from '~icons/fa-regular/copy';
	import OcticonGitBranch24 from '~icons/octicon/git-branch-24';
	import ClarityCogLine from '~icons/clarity/cog-line';
	import { filesList } from '$lib/util/files-list.svelte';
	import { editorsList } from '$lib/util/editors-list.svelte';
	import type { RouteFile } from '$lib/models/route-file';
	import PhCaretRightLight from '~icons/ph/caret-right-light';
	import LightSwitch from '../ui/LightSwitch.svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { invalidate } from '$app/navigation';

	let currentTile = $state(0);
	let showContextMenu = $state(false);
	let contextMenu: HTMLDivElement | null = $state(null);
	let contextTarget: RouteFile | null = $state(null);

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

	function openFile(file: RouteFile | null) {
		editorsList.openFile(file!);
	}

	function openInNewEditor(file: RouteFile | null) {
		editorsList.openNew(file!);
	}

	function fileContextMenu(event: MouseEvent, file: RouteFile) {
		if (!contextMenu) return;

		event.preventDefault();
		showContextMenu = true;
		const offset = 5;
		if (contextMenu.clientWidth + offset + event.clientX > window.innerWidth)
			contextMenu.style.left = `${event.clientX - contextMenu.clientWidth - offset}px`;
		else contextMenu.style.left = `${event.clientX + offset}px`;
		if (contextMenu.clientHeight + event.clientY + offset > window.innerHeight)
			contextMenu.style.top = `${event.clientY - contextMenu.clientHeight - offset}px`;
		else contextMenu.style.top = `${event.clientY + offset}px`;

		contextTarget = file;
	}

	onMount(() => {
		window.addEventListener('click', () => {
			showContextMenu = false;
		});
	});
</script>

<div
	class="card variant-glass-tertiary absolute w-fit rounded-xl"
	transition:scale
	bind:this={contextMenu}
	class:invisible={!showContextMenu}
>
	<button
		class="block w-48 rounded-t-xl bg-opacity-20 px-2 text-left hover:bg-primary-300-600-token hover:text-primary-600-300-token"
		on:click={() => openFile(contextTarget)}
	>
		<span>Open</span>
	</button>
	<button
		class="block w-48 rounded-b-xl bg-opacity-20 px-2 text-left hover:bg-primary-300-600-token hover:text-primary-600-300-token"
		on:click={() => openInNewEditor(contextTarget)}
	>
		<span>Open to the Side</span>
	</button>
</div>

<div class="flex h-full cursor-pointer gap-2">
	<section id="explorer">
		<h1 class="pl-3 pt-2 text-sm uppercase text-teal-300">Explorer</h1>
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
					<ul class="list">
						{#each filesList.files as file}
							<li
								class="overflow-hidden text-sm font-light
                                hover:text-surface-700-200-token
                                {file === editorsList.activeEditor?.activeFile
									? 'text-teal-300'
									: ''}"
								on:click={() => openFile(file)}
								on:keypress={() => openFile(file)}
								role="menuitem"
								tabindex="0"
								on:contextmenu={(e) => fileContextMenu(e, file)}
							>
								<svelte:component this={file.icon} style={file.iconStyle} />
								<span>{file.name}</span>
							</li>
						{/each}
					</ul>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>

	<AppRail
		background="surface-50 dark:surface-500"
		width="w-12"
		active=""
		hover="text-surface-600-300-token hover:text-surface-800-100-token"
	>
		<LightSwitch />
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
