export class LineProps {
	type?: 'comment' | 'code' | 'fadeOut' = 'comment';
	content?: string = '';
	isFirst?: boolean = false;
	isLast?: boolean = false;
	lineNumber?: number = 0;
}
