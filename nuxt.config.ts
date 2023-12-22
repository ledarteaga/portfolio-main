// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', 'dayjs-nuxt', 'nuxt-icon'],
  ssr: false,
  eslint: {
    lintOnStart: false,
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || '',
      token: process.env.GH_TOKEN || '',
    },
  },
});
