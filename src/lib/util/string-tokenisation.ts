enum TokenType {
	Keyword,
	Tag,
	TagContent,
	Brace,
	String,
	ClassName,
	Structure,
	Icon,
	None
}

const handleTokenStack = (word: string, tokenStack: string[]) => {
	if (['<', '{'].includes(word)) {
		tokenStack.push(word);
	}
	if (['>', '}'].includes(word)) {
		tokenStack.pop();
	}

	if (["'", '"'].includes(word)) {
		if (tokenStack[tokenStack.length - 1] === word) {
			tokenStack.pop();
		} else {
			tokenStack.push(word);
		}
	}
};

const getTokenType = (word: string, tokenStack: string[]) => {
	if (['Icon', 'Technologies'].includes(word)) return TokenType.ClassName;

	if (
		[
			'script',
			'import',
			'type',
			'from',
			'if',
			'else',
			'each',
			'as',
			'let',
			'const',
			'===',
			'interface'
		].includes(word)
	)
		return TokenType.Keyword;

	if (['script', 'div', 'span', 'h2', 'a', 'p'].includes(word)) return TokenType.Tag;

	if (word.match(/({|})/)) return TokenType.Brace;

	if (word.match(/("|')/)) return TokenType.String;

	if (word.match(/^%.*%$/)) return TokenType.Icon;

	if (["'", '"'].includes(tokenStack.at(-1) ?? '')) return TokenType.String;

	if (['(', ')', '[', ']', '<', '>', '=', '/'].includes(word)) return TokenType.Structure;
	if (tokenStack.at(-1) == '<') return TokenType.TagContent;

	return TokenType.None;
};

const getWordClass = (type: TokenType) => {
	switch (type) {
		case TokenType.Keyword:
			return 'text-secondary-700';
		case TokenType.Tag:
			return 'text-error-500';
		case TokenType.Brace:
			return 'text-warning-600';
		case TokenType.ClassName:
		case TokenType.TagContent:
			return 'text-warning-400';
		case TokenType.String:
			return 'text-success-700';
		case TokenType.None:
		case TokenType.Structure:
		case TokenType.Icon:
			return '';
	}
};

export const tokenize = (content: string) => {
	// Split on whitespace or any of the following characters: [ ] { } ( ) < > / # : = " '
	const words = content.split(/(\s+|\[|\]|\{|\}|\(|\)|<|>|\/|#|:|=|"|')/).filter(Boolean);
	const firstToken = words.at(words.findIndex((word) => word.trim() !== '')) ?? '';
	const tokenStack: string[] = [];
	handleTokenStack(firstToken, tokenStack);

	const tokenizedWords = words.map((word) => {
		const token = {
			content: word,
			type: getTokenType(word, tokenStack),
			class: ''
		};
		handleTokenStack(word, tokenStack);

		return token;
	});

	tokenizedWords.forEach((token, i) => {
		token.class = getWordClass(token.type);
	});

	if (tokenizedWords.filter((token) => token.content === 'flex-col').length > 0) {
		console.debug('tokenizedWords:', tokenizedWords);
	}
	return tokenizedWords;
};
