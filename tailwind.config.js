/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				'light-grey': '#585858',
				grey: '#393838',
				purple: '#7a1c91',
				red: '#970004'
			},
			fontFamily: {
				kumbh: 'Kumbh Sans'
			}
		}
	},
	plugins: []
};
