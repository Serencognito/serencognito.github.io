<script lang="ts">
	import { TokenType, tokenize } from '$lib/util/string-tokenisation';
	import DynamicIcon from '../ui/DynamicIcon.svelte';
	import type { LineProps } from './line-props';

	let { type, content, isFirst, isLast, lineNumber } = $props<LineProps>();

	let tokenizedContent = $derived(tokenize(content!));
</script>

<div class="flex gap-4 px-4">
	<div class="min-w-8 text-right text-surface-400" class:opacity-25={type == 'fadeOut'}>
		{lineNumber}
	</div>

	<div class="flex flex-1 flex-nowrap">
		{#if type === 'comment'}
			{#if isFirst}
				<div class="whitespace-pre text-surface-400">/**&nbsp;</div>
			{:else if isLast}
				<div class="whitespace-pre text-surface-400">**/</div>
			{:else}
				<div class="whitespace-pre text-surface-400">*&nbsp; {content}</div>
			{/if}
		{/if}

		{#if type === 'code'}
			{#each tokenizedContent as token}
				{#if token.type === TokenType.Icon}
					<DynamicIcon icon={token.content} />
				{:else}
					<span class="whitespace-pre {token.class}">{token.content}</span>
				{/if}
			{/each}
		{/if}

		{#if type === 'fadeOut'}
			<div class="whitespace-pre text-surface-400"></div>
		{/if}
	</div>
</div>
