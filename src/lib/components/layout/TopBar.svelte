<script lang="ts">
	import { editorsList } from '$lib/util/editors-list.svelte';
	import EditorFileList from '../editor/EditorFileList.svelte';
</script>

<section id="topBar" class="cursor-pointer">
	<section
		id="editorFileLists"
		class="grid grid-cols-{editorsList.editors.length} divide-x divide-red-800"
	>
		{#each editorsList.editors as editor}
			<EditorFileList {editor} />
		{/each}
	</section>
</section>
