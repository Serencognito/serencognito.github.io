<script lang="ts">
	import Line from '../editor/Line.svelte';
	import { aboutMeContent } from './about-me-content';
</script>

{#each aboutMeContent as line, i}
	<Line
		type={line.type}
		content={line.content}
		isFirst={line.isFirst}
		isLast={line.isLast}
		lineNumber={i + 1}
	/>
{/each}
