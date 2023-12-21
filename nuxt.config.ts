// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  eslint: {
    lintOnStart: false,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "",
    },
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    token: process.env.TOKEN,
  },
});
