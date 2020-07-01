import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './assets/css/gun.css'
import './assets/css/supersized.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './plugins/element.js'


Vue.use(mavonEditor)

router.beforeEach((to, from, next) => {
    let needLogin = to.matched.some(item => item.meta.requiresAuth)
    if (needLogin) {
        let LoginFlag =sessionStorage.getItem('user')
            
        if (LoginFlag) {
            next();
        } else {
            let tologin = window.confirm('"您没有登入不能查看此内容,请登入"')
            if (tologin) {
                next('/Login');
            }
        }
    } else {
        next();
    }
})


import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')