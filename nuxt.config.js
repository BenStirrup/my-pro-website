import pkg from './package'

export default {
  mode: 'universal',

  /* PWA manifest */
  manifest: {
    name: 'Benjamin Stirrup | Web development at lightspeed',
    short_name: 'Web development at lightspeed',
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
    title: 'Benjamin Stirrup | Web development at lightspeed',
    meta: [
      { author: 'Benjamin Stirrup' },
      { charset: 'utf-8' },
      {
        description:
          'Performance. Scalability. Design. Just for you, I conceive and develop tailor-made web applications in record time.'
      },
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
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff',
        href: '/fonts/icomoon.woff',
        crossorigin: true
      }
    ]
  },

  /* Customize the progress-bar color */
  loading: { color: '#fff' },

  /* Global CSS */
  css: [
    { src: '@/assets/style/main.scss', lang: 'scss' },
    { src: '@/assets/style/mixins.scss', lang: 'scss' },
    { src: '@/assets/style/icomoon.css', lang: 'css' }
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
  },
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findElement = (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findElement(hash, ++x || 1))
            }, 100)
          })
        )
      }

      let top = 0
      let behavior = 'auto'
      let timeout = 100
      if (to.hash) {
        const element = await findElement(to.hash)
        top = element.offsetTop - 110
        behavior = 'smooth'
      }
      if (to.path !== from.path) {
        timeout = 400 // Dependent on page transition duration
      }

      setTimeout(() => {
        return window.scrollTo({ top, behavior })
      }, timeout)
    }
  }
}
