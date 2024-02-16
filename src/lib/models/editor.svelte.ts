import type { RouteFile } from './route-file';

/**
 * Represents an editor that manages a collection of open files and an active file.
 */
export class Editor {
	/**
	 * The collection of open files.
	 */
	openFiles: RouteFile[] = $state([] as RouteFile[]);

	/**
	 * The currently active file.
	 */
	activeFile: RouteFile | null = $state(null);

	/**
	 * Closes the specified file.
	 * @param file - The file to close.
	 */
	closeFile(file: RouteFile) {
		const index = this.openFiles.indexOf(file);
		if (index > -1) {
			this.openFiles.splice(index, 1);
		}

		if (this.activeFile === file) {
			this.activeFile = this.openFiles[0] || null;
		}
	}

	/**
	 * Opens the specified file and makes it the active file.
	 * @param file - The file to open.
	 */
	openFile(file: RouteFile) {
		if (!this.openFiles.includes(file)) {
			this.openFiles.push(file);
		}

		this.activeFile = file;
	}

	/**
	 * Initializes a new instance of the Editor class.
	 * @param initialFile - The initial file to open.
	 */
	constructor(initialFile?: RouteFile) {
		if (initialFile) {
			this.openFiles = [initialFile];
			this.activeFile = initialFile;
		} else {
			this.openFiles = [];
			this.activeFile = null;
		}
	}
}
