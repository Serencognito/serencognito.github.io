import { describe, it, expect, vi } from 'vitest';
import { EditorsList } from './editors-list.svelte';
import type { Editor } from '$lib/models/editor.svelte';
import type { RouteFile } from '$lib/models/route-file';
import CibTypescript from '~icons/cib/typescript';
import CibSvelte from '~icons/cib/svelte';
import AboutMe from '$lib/components/content-files/AboutMe.svelte';

describe('EditorsList', () => {
	it('should open a file in the active editor if there is one', () => {
		const editorsList = new EditorsList();
		const file: RouteFile = {
			name: 'test.txt',
			route: '/path',
			path: ['src', 'lib', 'util'],
			icon: CibSvelte,
			iconStyle: ''
		};
		const activeEditor: Editor = {
			openFile: vi.fn(),
			openFiles: [],
			activeFile: file,
			closeFile: vi.fn()
		};
		editorsList.activeEditor = activeEditor;

		editorsList.openFile(file);

		expect(activeEditor.openFile).toHaveBeenCalledWith(file);
	});

	it('should open a new file in a new editor if there is no active editor', () => {
		const editorsList = new EditorsList();
		// Editor list initializes with an active editor, so we need to clear it to test this case
		editorsList.closeEditor(editorsList.activeEditor!);

		const file: RouteFile = {
			name: 'test.txt',
			route: '/path',
			path: ['src', 'lib', 'util'],
			icon: CibSvelte,
			iconStyle: ''
		};
		editorsList.openFile(file);

		expect(editorsList.activeEditor?.activeFile).toBe(file);
		expect(editorsList.activeEditor?.openFiles).toEqual([file]);
		expect(editorsList.editors.length).toBe(1);
	});

	it('should open a new file in a new editor', () => {
		const editorsList = new EditorsList();
		const file: RouteFile = {
			name: 'test.txt',
			route: '/path',
			path: ['src', 'lib', 'util'],
			icon: CibSvelte,
			iconStyle: ''
		};
		editorsList.openNew(file);
		expect(editorsList.activeEditor?.activeFile).toBe(file);
		expect(editorsList.activeEditor?.openFiles).toEqual([file]);
		expect(editorsList.editors.length).toBe(2);
	});

	it('should close an editor and update the active editor if it is closed', () => {
		const editorsList = new EditorsList();
		const editor1: Editor = {
			openFile: vi.fn(),
			openFiles: [],
			activeFile: null,
			closeFile: vi.fn()
		};
		const editor2: Editor = {
			openFile: vi.fn(),
			openFiles: [],
			activeFile: { name: 'test.txt' } as RouteFile,
			closeFile: vi.fn()
		};
		editorsList.editors = [editor1, editor2];
		editorsList.activeEditor = editor1;

		editorsList.closeEditor(editor1);

		expect(editorsList.editors).toEqual([editor2]);
		expect(editorsList.activeEditor).toBe(editor2);
	});

	it('should set the active editor', () => {
		const editorsList = new EditorsList();
		const editor: Editor = {
			openFile: vi.fn(),
			openFiles: [],
			activeFile: null,
			closeFile: vi.fn()
		};

		editorsList.setActiveEditor(editor);

		expect(editorsList.activeEditor).toBe(editor);
	});

	it('should initialize the list of editors with the first file from the list of files', () => {
		const editorsList = new EditorsList();
		expect(editorsList.editors.length).toBe(1);
		expect(editorsList.activeEditor).toBe(editorsList.editors[0]);

		expect(editorsList.activeEditor?.activeFile).toEqual({
			name: 'about-me.ts',
			path: ['src', 'routes'],
			icon: CibTypescript,
			iconStyle: 'color: #0088d1',
			route: '/about-me',
			component: AboutMe
		});
	});
});
