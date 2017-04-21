/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../test.vue')), 'test')
const page404 = resolve => require.ensure([], () => resolve(require('../404.vue')), 'page404')

const Index = resolve => require.ensure([], () => resolve(require('../pages/index.vue')), 'index')
const Home = resolve => require.ensure([], () => resolve(require('../pages/home/home.vue')), 'home')
const read = resolve => require.ensure([], () => resolve(require('../pages/read/read.vue')), 'read')
const dynamic = resolve => require.ensure([], () => resolve(require('../pages/dynamic/dynamic.vue')), 'dynamic')
const dynamicAdd = resolve => require.ensure([], () => resolve(require('../pages/dynamic_add/add_book.vue')), 'dynamicAdd')
const paper = resolve => require.ensure([], () => resolve(require('../pages/paper/paper.vue')), 'paper')
const hotList = resolve => require.ensure([], () => resolve(require('../pages/list/list.vue')), 'list')
const category = resolve => require.ensure([], () => resolve(require('../pages/category/category.vue')), 'category')




export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: Index,
            children: [
                {
                    path: '',
                    component: Home,
                },
                {
                    path: '/read',
                    component: read,
                }, {
                    path: '/dynamic',
                    component: dynamic
                }, {
                    path: '/dynamic_add',
                    component: dynamicAdd
                }, {
                    path: '/category',
                    component: category
                }, {
                    path: '/paper',
                    component: paper
                }, {
                    path: '/hot',
                    component: hotList
                }, {
                    path: '/test',
                    component: test
                }, {
                    path: '*',
                    component: page404
                }
            ]
        }

    ]
})
