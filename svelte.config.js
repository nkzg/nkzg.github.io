import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	prerender: {
		default: true,
		crawl: true, // Enables automatic crawling of links
	},


	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      pages: 'docs', // Output directory for GitHub Pages
      assets: 'docs',
      fallback: 'null',
    }),
    paths: {
			assets: '/',
      base: '', // Set the base path to the repository name
    },
	}
};

export default config;