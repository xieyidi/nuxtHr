const webpack = require('webpack')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtHr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/request'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
  router:{
    extendRoutes(routes, resolve){
        routes.splice(0)
        routes.push(...[{
            path:'/home',
            component:resolve(__dirname, 'pages/home/index.vue'),
            children:[
              {
                name:'home/home',
                path:'',
                component:resolve(__dirname, 'pages/home/home.vue')
              },
              {
                name:'question/home',
                path:'/question/home',
                component:resolve(__dirname, 'pages/question/home/index.vue')
              },
              {
                name:'grade/home',
                path:'/grade/home',
                component:resolve(__dirname, 'pages/grade/home/index.vue')
              },
              {
                name:'people/home',
                path:'/people/home',
                component:resolve(__dirname, 'pages/people/home/index.vue')
              }
            ]
        },{
          path:'/register',
          name:'register',
          component:resolve(__dirname, 'pages/userin/index.vue')
        },{
          path:'/login',
          name:'login',
          component:resolve(__dirname, 'pages/userin/index.vue')
        }])
    }
  },
  components: true
}
