// cores and libs
import Vue from 'vue';
import App from './app.component.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueForm from 'vue-form';

// internal libs imported
import VueRouter from 'vue-router';
import router from './router';


Vue.config.productionTip = false

// register imported modules to Vue instance
Vue.use(VueRouter);
Vue.use(ElementUI);
// Vue.use(VueForm);

new Vue({
  // reference the router we imported
  router,
  render: h => h(App),
}).$mount('#app')
