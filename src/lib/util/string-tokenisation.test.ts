import { TokenType, getTokenType, getWordClass, tokenize } from './string-tokenisation';
import { describe, it, expect } from 'vitest';

describe('getTokenType', () => {
	it('should return TokenType.ClassName for "Icon" and "Technologies"', () => {
		expect(getTokenType('Icon', [])).toBe(TokenType.ClassName);
		expect(getTokenType('Technologies', [])).toBe(TokenType.ClassName);
	});

	it('should return TokenType.Keyword for specified keywords', () => {
		expect(getTokenType('import', [])).toBe(TokenType.Keyword);
		expect(getTokenType('type', [])).toBe(TokenType.Keyword);
		expect(getTokenType('from', [])).toBe(TokenType.Keyword);
	});

	it('should return TokenType.Tag for specified HTML tags', () => {
		expect(getTokenType('script', [])).toBe(TokenType.Tag);
		expect(getTokenType('div', [])).toBe(TokenType.Tag);
		expect(getTokenType('span', [])).toBe(TokenType.Tag);
	});

	it('should return TokenType.ObjectBrace when word contains "{" or "}" and tokenStack includes "["', () => {
		expect(getTokenType('{', ['['])).toBe(TokenType.ObjectBrace);
		expect(getTokenType('}', ['['])).toBe(TokenType.ObjectBrace);
	});
});

describe('getWordClass', () => {
	it('should return the correct CSS class name for each token type', () => {
		expect(getWordClass(TokenType.Keyword)).toBe('text-secondary-500');
		expect(getWordClass(TokenType.Tag)).toBe('text-error-500');
		expect(getWordClass(TokenType.ObjectBrace)).toBe('text-tertiary-500');
		// ... add similar checks for other token types ...
	});
});

describe('tokenize', () => {
	it('should correctly tokenize a string', () => {
		const tokens = tokenize('import { Icon } from "./icons";');
		expect(tokens).toEqual([
			{ content: 'import', type: TokenType.Keyword, class: 'text-secondary-500' },
			{ content: ' ', type: TokenType.None, class: '' },
			{ content: '{', type: TokenType.Brace, class: 'text-warning-500' },
			{ content: ' ', type: TokenType.BraceContent, class: 'text-primary-500' },
			{ content: 'Icon', type: TokenType.ClassName, class: 'text-warning-400' },
			{ content: ' ', type: TokenType.BraceContent, class: 'text-primary-500' },
			{ content: '}', type: TokenType.Brace, class: 'text-warning-500' },
			{ content: ' ', type: TokenType.None, class: '' },
			{ content: 'from', type: TokenType.Keyword, class: 'text-secondary-500' },
			{ content: ' ', type: TokenType.None, class: '' },
			{ content: '"', type: TokenType.String, class: 'text-success-500' },
			{ content: '.', type: TokenType.String, class: 'text-success-500' },
			{ content: '/', type: TokenType.String, class: 'text-success-500' },
			{ content: 'icons', type: TokenType.String, class: 'text-success-500' },
			{ content: '"', type: TokenType.String, class: 'text-success-500' },
			{ content: ';', type: TokenType.Structure, class: '' }
		]);
	});
});
