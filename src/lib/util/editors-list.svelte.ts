import type { RouteFile } from '$lib/models/route-file';
import { Editor } from '$lib/models/editor.svelte';
import { filesList } from './files-list.svelte';

class EditorsList {
	editors = $state([] as Editor[]);
	activeEditor = $state(null as Editor | null);

	openNew(file: RouteFile) {
		const newEditor = new Editor(file);
		this.editors.push(newEditor);
	}

	constructor() {
		this.editors = [new Editor(filesList.files[0])];
		this.activeEditor = this.editors[0];
	}
}

export let editorsList = new EditorsList();
