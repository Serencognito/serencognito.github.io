import { LineProps } from './line-props';
import { describe, it, expect } from 'vitest';

describe('LineProps', () => {
	it('should have default values when no arguments are provided', () => {
		const lineProps: LineProps = {
			type: 'comment',
			content: '',
			isFirst: false,
			isLast: false,
			lineNumber: 0
		};
		expect(lineProps.type).toBe('comment');
		expect(lineProps.content).toBe('');
		expect(lineProps.isFirst).toBe(false);
		expect(lineProps.isLast).toBe(false);
		expect(lineProps.lineNumber).toBe(0);
	});

	it('should set the correct values when arguments are provided', () => {
		const lineProps: LineProps = {
			type: 'code',
			content: 'Hello, world!',
			isFirst: true,
			isLast: true,
			lineNumber: 1
		};
		expect(lineProps.type).toBe('code');
		expect(lineProps.content).toBe('Hello, world!');
		expect(lineProps.isFirst).toBe(true);
		expect(lineProps.isLast).toBe(true);
		expect(lineProps.lineNumber).toBe(1);
	});
});
