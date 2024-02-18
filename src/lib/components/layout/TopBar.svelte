<script lang="ts">
	import { editorsList } from '$lib/util/editors-list.svelte';
	import EditorFileList from './EditorFileList.svelte';

	let test = $derived(
		editorsList.editors.map((editor, index) => {
			return { files: editor.openFiles, editor: index };
		})
	);

	$inspect(test);
</script>

<section id="topBar" class="cursor-pointer">
	<section id="editorFileLists" class="grid grid-cols-{editorsList.editors.length} divide-x">
		{#each editorsList.editors as editor}
			<EditorFileList {editor} />
		{/each}
	</section>
</section>
