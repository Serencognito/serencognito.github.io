export class LineProps {
	type?: 'comment' | 'ts' | 'html' = 'comment';
	content?: string = '';
	isFirst?: boolean = false;
	isLast?: boolean = false;
	lineNumber?: number = 0;
}
