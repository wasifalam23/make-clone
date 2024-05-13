// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	colorMode: {
		preference: 'light',
	},
	ui: {
		icons: ['heroicons', 'fa6-brands'],
	},
	devtools: { enabled: false },
	modules: ['@nuxt/ui'],
});
