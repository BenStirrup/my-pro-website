import pkg from './package'

export default {
  mode: 'universal',

  /* PWA manifest */
  manifest: {
    name: 'Benjamin Stirrup Web Engineering',
    short_name: 'B.S. Web Engineering',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/pwa/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/pwa/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/pwa/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  /* Headers of the page */
  head: {
    title: 'Web development by Benjamin Stirrup',
    meta: [
      { author: 'Benjamin Stirrup' },
      { charset: 'utf-8' },
      { description: 'Professional web development by Benjamin Stirrup' },
      { hid: 'description', name: 'description', content: pkg.description },
      { lang: 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { theme_color: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff',
        href: '/fonts/SFUIText-Regular.woff',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff',
        href: '/fonts/SFUIText-Semibold.woff',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff',
        href: '/fonts/SFUIText-Bold.woff',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff',
        href: '/fonts/SFUIText-RegularItalic.woff',
        crossorigin: true
      }
    ]
  },

  /* Customize the progress-bar color */
  loading: { color: '#fff' },

  /* Global CSS */
  css: [
    { src: '@/assets/style/main.scss', lang: 'scss' },
    { src: '@/assets/style/mixins.scss', lang: 'scss' }
  ],

  /* Plugins to load before mounting the App */
  plugins: [],

  /* Nuxt.js modules */
  modules: ['@nuxtjs/pwa'],

  /* Build configuration */
  build: {
    /* You can extend webpack config here */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
