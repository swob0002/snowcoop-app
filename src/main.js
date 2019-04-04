// cores and libs
import Vue from 'vue'
import App from './app.component.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueForm from 'vue-form'
import * as VueGoogleMaps from 'vue2-google-maps'

// internal libs imported
import router from './router'
import store from './store'


// register imported modules to Vue instance
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueForm)  
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places'
  }
})

/* eslint-disable */
console.log(process.env.VUE_APP_GOOGLE_API_KEY);

// removes production tip in browser console
Vue.config.productionTip = false;

new Vue({
  // reference the router we imported
  router,
  store,
  render: h => h(App),
}).$mount('#app')
