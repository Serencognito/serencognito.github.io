<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import LightSwitch from '../ui/LightSwitch.svelte';
	import { editorsList } from '$lib/util/editors-list.svelte';
	import EditorFileList from './EditorFileList.svelte';
</script>

<section id="topBar" class="cursor-pointer">
	<AppBar
		background="surface-50 dark:surface-500  overflow-x-scroll"
		class="w-full"
		padding="px-8 py-1"
	>
		<svelte:fragment slot="lead">
			<section class="flex justify-between">
				{#each editorsList.editors as editor}
					<EditorFileList {editor} />
				{/each}
			</section>
		</svelte:fragment>
	</AppBar>
	<AppBar background="surface-50 dark:surface-500" padding="px-4 py-1">
		<section id="editorPath" class="flex justify-between divide-x">
			{#each editorsList.editors as editor}
				<ol class="breadcrumb">
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
			{/each}
		</section>
	</AppBar>
</section>
