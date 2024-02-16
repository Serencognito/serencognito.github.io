import type { RouteFile } from '$lib/models/route-file';
import CibTypescript from '~icons/cib/typescript';
import CibSvelte from '~icons/cib/svelte';

class FilesList {
	files = $state([] as RouteFile[]);

	constructor() {
		this.files = [
			{
				name: 'about-me.ts',
				path: ['src', 'routes'],
				icon: CibTypescript,
				iconStyle: 'color: #0088d1'
			},
			{
				name: 'made-with.svelte',
				path: ['src', 'lib', 'util'],
				icon: CibSvelte,
				iconStyle: 'color: #ff5722'
			}
		];
	}
}

export let filesList = new FilesList();
