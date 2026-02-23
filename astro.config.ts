import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://twoweeksgame.ru',
	integrations: [mdx(), sitemap()],

	output: 'static',
	build: {
		format: 'file',
	},
});
