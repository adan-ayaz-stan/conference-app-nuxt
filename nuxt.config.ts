// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css', 'aos/dist/aos.css'],
	build: {
		transpile: ['trpc-nuxt'],
	},
	modules: ['@nuxtjs/supabase', '@formkit/nuxt', '@pinia/nuxt'],
	experimental: {
		reactivityTransform: true,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
