/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const page404 = resolve => require.ensure([], () => resolve(require('../404.vue')), 'page404')

const Index = resolve => require.ensure([], () => resolve(require('../pages/index.vue')), 'page1')
const p1 = resolve => require.ensure([], () => resolve(require('../pages/p1/one.vue')), 'page1')
const p2 = resolve => require.ensure([], () => resolve(require('../pages/p2/two.vue')), 'page2')


export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: Index,
            children: [
                {
                    path: '',
                    component: p1,
                },
                {
                    path: '/read',
                    component: p1,
                }, {
                    path: '/dynamic',
                    component: p2
                }, {
                    path: '/category',
                    component: p2
                }, {
                    path: '/paper',
                    component: p2
                }, {
                    path: '/hot',
                    component: p2
                }, {
                    path: '*',
                    component: page404
                }
            ]
        },

    ]
})
