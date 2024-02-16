<script lang="ts">
	import MaterialSymbolsLightClose from '~icons/material-symbols-light/close';
	import type { Editor } from '$lib/models/editor.svelte';
	import type { RouteFile } from '$lib/models/route-file';

	let { editor } = $props<{ editor: Editor }>();

	$inspect(editor);

	const isActive = (file: RouteFile) => {
		return file === editor.activeFile;
	};

	function closeFile(file: RouteFile): any {
		editor.closeFile(file);
	}
</script>

<section
	id="openFiles"
	class="grid scroll-m-6 grid-flow-col gap-4 scrollbar-none hover:scrollbar-thin"
>
	{#each editor.openFiles as file}
		<span
			class="group flex items-center justify-between gap-2 whitespace-nowrap"
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
				on:click={() => closeFile(file)}
			>
				<MaterialSymbolsLightClose class="invisible h-5 w-5 group-hover:visible" />
			</button>
		</span>
	{/each}
</section>
