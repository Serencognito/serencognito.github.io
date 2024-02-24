/**
 * Represents the properties of a line in an editor.
 */
export class LineProps {
	/**
	 * The type of the line. Can be 'comment', 'code', or 'fadeOut'.
	 */
	type?: 'comment' | 'code' | 'fadeOut' = 'comment';

	/**
	 * The content of the line.
	 */
	content?: string = '';

	/**
	 * Indicates whether the line is the first line in the editor.
	 */
	isFirst?: boolean = false;

	/**
	 * Indicates whether the line is the last line in the editor.
	 */
	isLast?: boolean = false;

	/**
	 * The line number of the line.
	 */
	lineNumber?: number = 0;
}
