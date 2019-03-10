// 4. Add route option object in router.js

import VueRouter from 'vue-router';
import loginPage from './components/pages/login-page/login-page.component.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: loginPageComponent
      //loginPageComponent might have to be loginPage
    },
  ]
});

export default router;