// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-snackbar'],
  snackbar: {
    bottom: true,
    right: true,
    duration: 3000
  },
  runtimeConfig: {
    public: {
      TOKEN: process.env.TOKEN,
      BACKEND_API: process.env.BACKEND_API,
    },
  },
})