import type { RouteFile } from '$lib/models/route-file';
import { Editor } from '$lib/models/editor.svelte';
import { filesList } from './files-list.svelte';

class EditorsList {
	editors = $state([] as Editor[]);

	openNew(file: RouteFile) {
		const newEditor = new Editor(file);
		this.editors.push(newEditor);
	}

	constructor() {
		this.editors = [new Editor(filesList.files[0])];
		this.editors[0].openFiles.push(filesList.files[1]);
	}
}

export let editorsList = new EditorsList();
