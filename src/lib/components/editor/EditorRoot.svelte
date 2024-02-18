<script lang="ts">
	import type { Editor } from '$lib/models/editor.svelte';
	import { editorsList } from '$lib/util/editors-list.svelte';
	import EditorFileList from './EditorFileList.svelte';

	let { editor } = $props<{ editor: Editor }>();

	$inspect(editorsList.activeEditor);
</script>

<section
	id="editor-root"
	class="overflow-x-scroll"
	on:click={() => editorsList.setActiveEditor(editor)}
	on:keydown={() => editorsList.setActiveEditor(editor)}
	role="menu"
	tabindex={0}
>
	<div class="cursor-pointer">
		<EditorFileList {editor} />
	</div>

	<svelte:component this={editor.activeFile?.component} />
</section>
