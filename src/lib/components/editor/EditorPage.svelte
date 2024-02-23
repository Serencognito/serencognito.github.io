<script lang="ts">
	import Line from '../editor/Line.svelte';
	import { LineProps } from './line-props';

	let { contents } = $props<{ contents: LineProps[] }>();
</script>

<section id="pageContents" class="overflow-x-scroll">
	{#each contents as line, i}
		<Line
			type={line.type}
			content={line.content}
			isFirst={line.isFirst}
			isLast={line.isLast}
			lineNumber={i + 1}
		/>
	{/each}
	<Line type="fadeOut" content=" " lineNumber={contents.length + 1} />
	<div class="h-40" id="pageSpacer"></div>
</section>
