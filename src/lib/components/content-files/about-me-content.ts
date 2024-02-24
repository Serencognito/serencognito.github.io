import type { LineProps } from '../editor/line-props';

/**
 * Represents the content for the "About Me" section.
 */
export const aboutMeContent: LineProps[] = [
	{ type: 'comment', content: '', isFirst: true },
	{ type: 'comment', content: 'About Me' },
	{ type: 'comment', content: 'I am a Full-stack Software Developer, ' },
	{ type: 'comment', content: 'qualified with a BSc Computer Science degree completed in 2016.' },
	{
		type: 'comment',
		content:
			'I have been working since 2017 and primarily work on projects with a C# Service Layer,'
	},
	{
		type: 'comment',
		content: 'SQL Server Data Layer and a front-end developed using Angular and TypeScript.'
	},
	{ type: 'comment', content: '' },
	{
		type: 'comment',
		content:
			'I have also previously worked extensively maintaining older jQuery focused applications and'
	},
	{
		type: 'comment',
		content:
			'have more recently been using Svelte (at times paired with Electron for desktop) for projects'
	},
	{
		type: 'comment',
		content:
			"I get the opportunity to self-start. In my free time I've recently been spending time getting"
	},
	{
		type: 'comment',
		content:
			"to grips grip with Godot's GDScript and occasionally learning Go. I generally pick up skills"
	},
	{
		type: 'comment',
		content: 'quickly and love learning and using new technologies and frameworks.'
	},
	{ type: 'comment', content: '' },
	{
		type: 'comment',
		content:
			'Although originally born in South Africa, I have dual citizenship and moved to Scotland in'
	},
	{
		type: 'comment',
		content:
			'2021 to further my career opportunities and improve my own skills in new environments.'
	},
	{ type: 'comment', content: '', isLast: true }
];
