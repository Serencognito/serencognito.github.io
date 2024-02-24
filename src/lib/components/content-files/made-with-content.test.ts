import { madeWithContent } from './made-with-content';
import { describe, it, expect } from 'vitest';

describe('madeWithContent', () => {
	it('should have the correct number of elements', () => {
		expect(madeWithContent.length).toBe(54);
	});

	// Optional properties are not checked
	it('should have the correct structure', () => {
		madeWithContent.forEach((element) => {
			expect(element).toHaveProperty('type');
			expect(element).toHaveProperty('content');
		});
	});

	it('should have set correct content values', () => {
		expect(madeWithContent[0].content).toBe('<script lang="ts">');
		expect(madeWithContent[1].content).toBe('    import { Icon } from "../icons/icon";');
	});

	it('should have the correct isFirst values', () => {
		expect(madeWithContent[0].isFirst).toBe(true);
		expect(madeWithContent[1].isFirst).toBe(undefined);
	});
});
