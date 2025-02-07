export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  router: {
    base: '/nasha-nuxt/'  // ✅ Corrected base path for GitHub Pages
  },

  render: {
    resourceHints: false  // ✅ Disables unnecessary preloading warnings
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nasha-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css', // Switched to CSS (or SCSS if required)
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/firebase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', 
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyC2YDsGe5wykC8OZpuSbRcWZdfZUVUcj5A",
          authDomain: "nasha-offline.firebaseapp.com",
          projectId: "nasha-offline",
          storageBucket: "nasha-offline.firebasestorage.app",
          messagingSenderId: "1014044421995",
          appId: "1:1014044421995:web:3d4cb5201ae076b73a662e"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Firebase configuration
  firebase: {
    config: {
      apiKey: "AIzaSyC2YDsGe5wykC8OZpuSbRcWZdfZUVUcj5A",
      authDomain: "nasha-offline.firebaseapp.com",
      projectId: "nasha-offline",
      storageBucket: "nasha-offline.firebasestorage.app",
      messagingSenderId: "1014044421995",
      appId: "1:1014044421995:web:3d4cb5201ae076b73a662e"
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      appCheck: true,
      analytics: true,
      remoteConfig: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
