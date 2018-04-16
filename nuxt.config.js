const axios = require('axios')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mirror',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },
  modules: [
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '48484433',
        webvisor: true,
        clickmap:true,
        useCDN:false,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ]
  ],
  plugins: [
    '~/plugins/loader.js'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://mirror-universe.ru',
    cacheTime: 1000 * 60 * 15,
    exclude: [
      '/search',
    ],
    routes (callback) {
      return axios.get('https://api.mirror-universe.ru/sitemap').then(res => {
        let routes = res.data.map(item => item)
        callback(null, routes)
      }).catch(callback)
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  router: {
    linkActiveClass: 'active'
  },
  css: [
    {src: '~/assets/sass/main.sass', lang: 'sass'},
  ],
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
