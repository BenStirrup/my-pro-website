import pkg from './package'

export default {
  mode: 'universal',

  /* PWA manifest */
  manifest: {
    name: 'B.S. Web Development',
    short_name: 'B.S. Web',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },

  /* Headers of the page */
  head: {
    title: 'Web development by Benjamin Stirrup',
    meta: [
      { author: 'Benjamin Stirrup ' },
      { charset: 'utf-8' },
      { description: 'Professional web development by Benjamin Stirrup' },
      { hid: 'description', name: 'description', content: pkg.description },
      { lang: 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { theme_color: '#ffffff' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /* Customize the progress-bar color */
  loading: { color: '#fff' },

  /* Global CSS */
  css: ['@/assets/css/main.scss'],

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
