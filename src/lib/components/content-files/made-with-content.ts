import type { LineProps } from '../editor/line-props';

/**
 * Represents an array of LineProps objects that define the content for the "Made with" section.
 */
export const madeWithContent: LineProps[] = [
	{ type: 'code', content: '<script lang="ts">', isFirst: true },
	{ type: 'code', content: '    import { Icon } from "../icons/icon";' },
	{
		type: 'code',
		content:
			"    import { inspiration } from 'https://www.figma.com/community/file/1100794861710979147/portfolio-for-developers-concept-v-2?searchSessionId=lsymnbri-5uu2hhn7t3'"
	},
	{ type: 'code', content: '' },
	{ type: 'code', content: '    interface Technologies {' },
	{ type: 'code', content: '        name: string;' },
	{ type: 'code', content: '        icon: Icon;' },
	{ type: 'code', content: '    }' },
	{ type: 'code', content: '' },
	{ type: 'code', content: '    let technologies = [' },
	{ type: 'code', content: '        {' },
	{ type: 'code', content: "            name: 'Svelte'," },
	{ type: 'code', content: "            icon: '%svelte%'" },
	{ type: 'code', content: '        },' },
	{ type: 'code', content: '        {' },
	{ type: 'code', content: "            name: 'TypeScript'," },
	{ type: 'code', content: "            icon: '%typescript%'" },
	{ type: 'code', content: '        },' },
	{ type: 'code', content: '        {' },
	{ type: 'code', content: "            name: 'Tailwind CSS'," },
	{ type: 'code', content: "            icon: '%tailwindcss%'" },
	{ type: 'code', content: '        },' },
	{ type: 'code', content: '        {' },
	{ type: 'code', content: "            name: 'Skeleton'," },
	{ type: 'code', content: "            icon: '%skeleton%'" },
	{ type: 'code', content: '        }' },
	{ type: 'code', content: '    ];' },
	{ type: 'code', content: '</script>' },
	{ type: 'code', content: '' },
	{ type: 'code', content: '{#if inspiration}' },
	{ type: 'code', content: '    <div class="flex flex-col gap-4">' },
	{ type: 'code', content: '        <h2 class="text-2xl font-bold">Made with</h2>' },
	{ type: 'code', content: '        <div class="flex flex-wrap gap-4">' },
	{ type: 'code', content: '            {#each technologies as tech}' },
	{ type: 'code', content: '                <div class="flex flex-col items-center gap-2">' },
	{
		type: 'code',
		content:
			'                   <img src={`./icons/${tech.icon}.svg`} alt={tech.name} class="w-12 h-12" />'
	},
	{ type: 'code', content: '                <span class="text-sm font-bold">{tech.name}</span>' },
	{ type: 'code', content: '            </div>' },
	{ type: 'code', content: '        {/each}' },
	{ type: 'code', content: '    </div>' },
	{ type: 'code', content: '' },
	{ type: 'code', content: '    <h2 class="text-2xl font-bold">Based on</h2>' },
	{ type: 'code', content: '        <p class="text-sm">' },
	{ type: 'code', content: '            I came across ' },
	{
		type: 'code',
		content:
			'           <a href={inspiration} target="_blank" rel="noopener noreferrer" class="text-primary-500 underline">'
	},
	{ type: 'code', content: '                this design' },
	{ type: 'code', content: '            </a>' },
	{
		type: 'code',
		content:
			'           on Figma Community and decided it would be fun to recreate a live version of it using some of my favorite technologies.'
	},
	{ type: 'code', content: '        </p>' },
	{ type: 'code', content: '        <p>' },
	{
		type: 'code',
		content:
			'           The current design is based on my own VSCode setup, so is a bit more true to myself.'
	},
	{ type: 'code', content: '        </p>' },
	{ type: 'code', content: '    </div>' },
	{ type: 'code', content: '{/if}' }
];
