<script lang="ts">
	import type { PageData } from './$types';
	import { editorsList } from '$lib/util/editors-list.svelte';
	import EditorRoot from '$lib/components/editor/EditorRoot.svelte';
	export let data: PageData;
</script>

{#if editorsList.editors.length > 0}
	<section id="editors" class="grid h-screen grid-cols-{editorsList.editors.length}">
		{#each editorsList.editors as editor, index}
			<div class="flex">
				{#if index != 0}
					<div class="border-surface-500-400-token mr-4 border-l-[0.2px] border-opacity-15" />
				{/if}
				<EditorRoot {editor} />
			</div>
		{/each}
	</section>
{:else}
	<p>Open a file</p>
{/if}
