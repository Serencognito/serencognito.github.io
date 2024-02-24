import { aboutMeContent } from './about-me-content';
import { describe, it, expect } from 'vitest';

describe('aboutMeContent', () => {
	it('should have the correct number of lines', () => {
		expect(aboutMeContent.length).toBe(16);
	});

	it('should have the correct line types and content', () => {
		expect(aboutMeContent[0]).toEqual({ type: 'comment', content: '', isFirst: true });
		expect(aboutMeContent[1]).toEqual({ type: 'comment', content: 'About Me' });
		expect(aboutMeContent[2]).toEqual({
			type: 'comment',
			content: 'I am a Full-stack Software Developer, '
		});
		expect(aboutMeContent[3]).toEqual({
			type: 'comment',
			content: 'qualified with a BSc Computer Science degree completed in 2016.'
		});
	});

	it('should have the correct isFirst and isLast properties', () => {
		expect(aboutMeContent[0].isFirst).toBe(true);
		expect(aboutMeContent[14].isLast).toBe(undefined);
	});
});
