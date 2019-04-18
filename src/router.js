import VueRouter from 'vue-router'
import loginPage from './components/pages/login-page/login-page.component.vue'
import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue'
import registerPage from './components/pages/register-page/register-page.component.vue'
import listPage from './components/pages/list-page/list-page.component.vue'
// extra
// import sideNavigation from './components/side-navigation/side-navigation.component.vue'

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
        component: dashboardPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/register',
        component: registerPage
    },
    {
        path: '/list',
        component: listPage,
        meta: {
            requiresAuth: true
        }
    }
    // ,
    // {
    //     path: '/sideNavigation',
    //     component: sideNavigation
    // }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("token") == null) {
            next({
                path: "/login",
                params: to.fullPath
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router