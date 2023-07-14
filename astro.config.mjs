import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	site: 'https://twoweeksgame.ru',
	integrations: [mdx(), image(), sitemap(), compress()],

	output: 'static',
	build: {
		format: 'file'
	}
});
