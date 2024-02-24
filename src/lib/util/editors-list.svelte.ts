import type { RouteFile } from '$lib/models/route-file';
import { Editor } from '$lib/models/editor.svelte';
import { filesList } from './files-list.svelte';

/**
 * Represents a list of editors.
 */
/**
 * Represents a list of editors.
 */
export class EditorsList {
	/**
	 * The array of editors.
	 */
	editors = $state([] as Editor[]);
	/**
	 * The active editor.
	 */
	activeEditor = $state(null as Editor | null);

	/**
	 * Opens a file in the editor.
	 * If there is an active editor, it calls the `openFile` method of the active editor.
	 * If there is no active editor, it calls the `openNew` method with the specified file.
	 *
	 * @param file - The file to be opened.
	 */
	openFile(file: RouteFile) {
		if (this.activeEditor) {
			this.activeEditor.openFile(file);
		} else {
			this.openNew(file);
		}
	}

	/**
	 * Opens a new file in a new editor.
	 *
	 * @param file - The file to be opened.
	 */
	openNew(file: RouteFile) {
		const newEditor = new Editor(file);
		this.editors.push(newEditor);
		this.activeEditor = newEditor;
	}

	/**
	 * Closes an editor.
	 *
	 * @param editor - The editor to be closed.
	 */
	closeEditor(editor: Editor) {
		const index = this.editors.indexOf(editor);
		if (index > -1) {
			this.editors.splice(index, 1);
		}

		if (this.activeEditor === editor) {
			this.activeEditor = this.editors[0] || null;
		}
	}

	/**
	 * Sets the active editor.
	 *
	 * @param editor - The editor to be set as active.
	 */
	setActiveEditor(editor: Editor) {
		this.activeEditor = editor;
	}

	/**
	 * Initializes the list of editors with the first file from the list of files.
	 */
	constructor() {
		this.editors = [new Editor(filesList.files[0])];
		this.activeEditor = this.editors[0];
	}
}

/**
 * The list of editors.
 */
export let editorsList = new EditorsList();
