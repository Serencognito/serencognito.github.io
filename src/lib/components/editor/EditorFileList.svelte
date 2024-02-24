<script lang="ts">
	import MaterialSymbolsLightClose from '~icons/material-symbols-light/close';
	import type { Editor } from '$lib/models/editor.svelte';
	import type { RouteFile } from '$lib/models/route-file';
	import { editorsList } from '$lib/util/editors-list.svelte';

	let { editor } = $props<{ editor: Editor }>();
	let isActiveEditor = $derived(editorsList.activeEditor == editor);

	const isActive = (file: RouteFile) => {
		return file === editor.activeFile;
	};

	function closeFile(file: RouteFile): any {
		editor.closeFile(file);
	}
</script>

<section id="editor" class="p-3">
	<div
		id="openFiles"
		class="flex scroll-m-6 gap-4 overflow-x-scroll scrollbar-none hover:scrollbar-thin"
	>
		{#each editor.openFiles as file}
			<span
				class="group flex w-fit items-center justify-between gap-2 whitespace-nowrap"
				class:opacity-50={!isActiveEditor}
				class:text-teal-300={isActive(file)}
				on:click={() => editor.openFile(file)}
				on:keypress={() => editor.openFile(file)}
				tabindex="0"
				role="menuitem"
			>
				<svelte:component this={file.icon} style={file.iconStyle} />
				<span class="break-inside-avoid text-nowrap"> {file.name}</span>

				<button
					class="flex h-6 w-6 items-center justify-center rounded hover:bg-surface-400/25"
					on:click|stopPropagation={() => closeFile(file)}
				>
					<MaterialSymbolsLightClose class="invisible h-5 w-5 group-hover:visible" />
				</button>
			</span>
		{/each}
	</div>

	<ol class="breadcrumb overflow-x-scroll whitespace-nowrap scrollbar-none hover:scrollbar-thin">
		{#if editor.activeFile}
			{#each editor.activeFile.path || [] as pathPart}
				<li class="crumb hover:text-surface-800-100-token">{pathPart}</li>
				<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			{/each}
			<li class="crumb hover:text-surface-800-100-token">
				{editor.activeFile.name}
			</li>
		{/if}
	</ol>
</section>
