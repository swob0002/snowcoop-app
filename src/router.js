import VueRouter from 'vue-router';
// import DashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';
// import ListPage from './components/pages/list-page/list-page.component.vue';
import loginPageComponent from './components/pages/login-page/login-page.component.vue';

// adding route option object
const router = new VueRouter({
  routes: [
    { 
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: loginPageComponent
    },
    // {
    //     path: '/dashboard',
    //     component: DashboardPage
    // },
    // {
    //     path: '/list',
    //     component: ListPage
    // },
  ]
});

export default router;