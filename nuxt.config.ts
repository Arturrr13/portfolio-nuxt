// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',

  devtools: { enabled: false},

  i18n: {
    langDir: resolve('assets/i18n'),
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ua',
        name: 'Ukraine',
        file: 'ua.json'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    strategy: 'prefix_except_default'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `
            @use "/assets/css/function.scss" as *; 
            @use "/assets/css/mixins.scss" as *;
            @use "/assets/css/colors.scss" as *;
          `
        },
      }
    }
  },

  css: ['/assets/css/main.scss'],
  modules: ["@nuxtjs/i18n", "@vueuse/nuxt", "@nuxt/image"]
})