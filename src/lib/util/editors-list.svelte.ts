import type { RouteFile } from '$lib/models/route-file';
import { Editor } from '$lib/models/editor.svelte';
import { filesList } from './files-list.svelte';

class EditorsList {
	editors = $state([] as Editor[]);
	activeEditor = $state(null as Editor | null);

	openFile(file: RouteFile) {
		if (this.activeEditor) {
			this.activeEditor.openFile(file);
		} else {
			this.openNew(file);
		}
	}

	openNew(file: RouteFile) {
		const newEditor = new Editor(file);
		this.editors.push(newEditor);
		this.activeEditor = newEditor;
	}

	closeEditor(editor: Editor) {
		const index = this.editors.indexOf(editor);
		if (index > -1) {
			this.editors.splice(index, 1);
		}

		if (this.activeEditor === editor) {
			this.activeEditor = this.editors[0] || null;
		}
	}

	setActiveEditor(editor: Editor) {
		this.activeEditor = editor;
	}

	constructor() {
		this.editors = [new Editor(filesList.files[0])];
		this.activeEditor = this.editors[0];
	}
}

export let editorsList = new EditorsList();
