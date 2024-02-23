<script lang="ts">
	import type { LineProps } from './line-props';

	let { type, content, isFirst, isLast, lineNumber } = $props<LineProps>();
</script>

<div class="flex gap-4 px-4">
	<div class="w-16 text-right text-surface-400">{lineNumber}</div>

	<div class="flex-1">
		{#if type === 'comment'}
			{#if isFirst}
				<div class="text-surface-400">/**&nbsp;</div>
			{:else if isLast}
				<div class="text-surface-400">**/</div>
			{:else}
				<div class="text-surface-400">*&nbsp; {content}</div>
			{/if}
		{/if}

		{#if type === 'ts'}
			<div>{content}</div>
		{/if}

		{#if type === 'html'}
			<div>{content}</div>
		{/if}
	</div>
</div>
