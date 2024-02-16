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

		<svelte:fragment slot="trail">
			<LightSwitch />
		</svelte:fragment>
	</AppBar>
	<AppBar background="surface-50 dark:surface-500" padding="px-4 py-1">
		<section id="editorPath" class="flex justify-between divide-x">
			{#each editorsList.editors as editor}
				<div class="flex gap-1">
					{#if editor.activeFile}
						{#each editor.activeFile.path || [] as pathPart}
							<span class="px-1 hover:text-surface-800-100-token">{pathPart}</span>
							<span>&gt;</span>
						{/each}
						<span class="px-1 hover:text-surface-800-100-token">
							{editor.activeFile.name}
						</span>
					{/if}
				</div>
			{/each}
		</section>
	</AppBar>
</section>
