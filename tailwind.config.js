/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./formkit.config.ts',
	],
	theme: {
		extend: {
			colors: {
				appRed: '#F35641',
				textGray: '#747474',
			},
			fontFamily: {
				inter: ['Inter'],
			},
		},
	},
	plugins: [require('daisyui')],
};
