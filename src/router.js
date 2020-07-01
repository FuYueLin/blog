import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: "active-exact", //配置完全匹配的class名字
    linkActiveClass: "active",
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/Myblog',
            name: 'Myblog',
            component: () =>
                import ('./components/Myblog')
        }, {
            path: '/blog',
            name: 'blog',
            component: () =>
                import ('./components/blog')
        }, {
            path: '/hobby',
            name: 'hobby',
            component: () =>
                import ('./components/hobby'),

        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./components/register')
        },
        {
            path: '/guestbook',
            name: 'guestbook',
            meta: { requiresAuth: true },
            component: () =>
                import ('./components/guestbook')
        },
        {
            path: '/Link',
            name: 'Link',
            meta: { requiresAuth: true },
            component: () =>
                import ('./components/Link')
        },
        {
            path: "*",
            redirect(to) {
                if (to.path === "/") {
                    return "/Myblog";
                } else {
                    return "/NotFound";
                }
            }
        },


    ]
})