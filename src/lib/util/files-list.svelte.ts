import type { RouteFile } from '$lib/models/route-file';
import CibTypescript from '~icons/cib/typescript';
import CibSvelte from '~icons/cib/svelte';
import AboutMe from '$lib/components/content-files/AboutMe.svelte';
import MadeWith from '$lib/components/content-files/MadeWith.svelte';

/**
 * Represents a list of files.
 */
export class FilesList {
	/**
	 * The array of files.
	 */
	files = $state([] as RouteFile[]);

	/**
	 * The active file.
	 */
	constructor() {
		this.files = [
			{
				name: 'about-me.ts',
				path: ['src', 'routes'],
				icon: CibTypescript,
				iconStyle: 'color: #0088d1',
				route: '/about-me',
				component: AboutMe
			},
			{
				name: 'made-with.svelte',
				path: ['src', 'lib', 'util'],
				icon: CibSvelte,
				iconStyle: 'color: #ff5722',
				route: '/made-with',
				component: MadeWith
			}
		];
	}
}

/**
 * The list of files.
 */
export let filesList = new FilesList();
