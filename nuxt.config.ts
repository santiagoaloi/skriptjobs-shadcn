// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ssr: false,

  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'motion-v/nuxt',
    '@nuxt/eslint',
  ],

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
    // compatibilityVersion: 4,
  },

  experimental: {
    cookieStore: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  nitro: {
    preset: 'vercel-edge',
    prerender: {
      routes: [
        '/',
      ],
    },
  },

  routeRules: {
    '/components': { redirect: '/components/accordion' },
    '/settings': { redirect: '/settings/profile' },
  },

  imports: {
    imports: [
      { from: 'tailwind-variants', name: 'tv' },
      { from: 'tailwind-variants', name: 'VariantProps', type: true },
    ],
    dirs: [
      './lib',
    ],
  },

  compatibilityDate: '2024-12-14',
})
