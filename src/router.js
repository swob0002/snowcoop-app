import VueRouter from 'vue-router';
import loginPage from './components/pages/login-page/login-page.component.vue';
import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';
// import listPage from './components/pages/list-page/list-page.component.vue';

// adding route option object
const router = new VueRouter({
  routes: [
    { 
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: loginPage
    },
    {
        path: '/dashboard',
        component: dashboardPage
    }
    // {
    //     path: '/list',
    //     component: listPage
    // },
  ]
});

export default router;