<script lang="ts">
	let { lineCount, type = null } = $props<{ lineCount: number; type: null | 'commentblock' }>();

	let visibleLines = $derived(lineCount + 1);

	let lines = $derived(Array.from(Array(visibleLines).keys()).map((x) => x + 1));
</script>

<section id="editor-page" class="flex">
	<div id="line-numbers" class="grid grid-cols-{visibleLines}">
		{#each lines as line, i}
			<div class="flex">
				<div class="mr-4 w-16 text-right text-surface-400" class:opacity-25={i == visibleLines - 1}>
					{line}
				</div>
				{#if type == 'commentblock'}
					<div class="text-surface-400">
						{#if i == 0}
							/**&nbsp;
						{:else if i < visibleLines - 1}
							*&nbsp;
						{:else}
							*/ &nbsp;
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<slot />
</section>
