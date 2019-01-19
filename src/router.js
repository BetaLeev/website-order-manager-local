import Vue from 'vue'

import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        children: [{
            path: '',
            name: '',
            component: Home,
        }, {
            path: 'add',
            name: 'add',
            component: () =>
                import ('./views/Add.vue')
        }, {
            path: 'complete',
            name: 'complete',
            component: () =>
                import ('./views/Add.vue')
        }]
    }]
})