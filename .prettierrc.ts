import { type Config } from 'prettier';

export default {
	arrowParens: 'avoid',
	trailingComma: 'all',
	semi: true,
	useTabs: true,
	bracketSpacing: true,
	singleQuote: true,
	bracketSameLine: false,
	plugins: ['prettier-plugin-astro'],
} as const satisfies Config;
