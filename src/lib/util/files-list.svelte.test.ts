import { describe, it, expect } from 'vitest';
import CibTypescript from '~icons/cib/typescript';
import CibSvelte from '~icons/cib/svelte';
import AboutMe from '$lib/components/content-files/AboutMe.svelte';
import MadeWith from '$lib/components/content-files/MadeWith.svelte';
import { FilesList } from './files-list.svelte';
import type { RouteFile } from '$lib/models/route-file';

const originalFiles = [
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
] as RouteFile[];

describe('FilesList', () => {
	it('should correctly initialize the files array with the provided data in the constructor', () => {
		const filesList = new FilesList();
		expect(filesList.files).to.deep.equal([
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
		]);
	});

	it('should correctly expose the files array through the files property', () => {
		const filesList = new FilesList();
		expect(filesList.files).to.be.an('array').that.is.not.empty;
	});
});

describe('FilesList', () => {
	it('should have been pre-initialized with files when created', () => {
		const filesList = new FilesList();

		expect(filesList.files).to.deep.equal(originalFiles);
	});

	it('should update the files array when new data is assigned to it', () => {
		const filesList = new FilesList();
		const newFiles: RouteFile[] = [
			{
				name: 'file1.ts',
				path: ['src', 'routes'],
				icon: CibTypescript,
				iconStyle: 'color: #0088d1',
				route: '/file1',
				component: AboutMe
			},
			{
				name: 'file2.svelte',
				path: ['src', 'lib', 'util'],
				icon: CibSvelte,
				iconStyle: 'color: #ff5722',
				route: '/file2',
				component: MadeWith
			}
		];
		newFiles.forEach((f) => filesList.files.push(f));
		expect(filesList.files).to.deep.equal(originalFiles.concat(newFiles));
	});
});
