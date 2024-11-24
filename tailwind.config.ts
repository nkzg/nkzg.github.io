import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        tiempos: ["Tiempos"],
        america: ["GTAmerica"],
        freight: ["Freight"],
      },
      colors: {
        primary: {
          100: '#2E6F40',
          200: '#FCF8F3',
          300: '#5F9EA0',
        },
      }
    }
  },

	plugins: [ typography, forms, containerQueries, aspectRatio]
} satisfies Config;