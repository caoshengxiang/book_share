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
const bookDetail = resolve => require.ensure([], () => resolve(require('../pages/book_detail/book_detail.vue')), 'category')
const searchResult = resolve => require.ensure([], () => resolve(require('../pages/search_list/search_list.vue')), 'category')




export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: Index,
            children: [
                {
                    name: 'home',
                    path: '',
                    component: Home,
                },
                {
                    name: 'detail',
                    path: '/book/:detail',
                    component: bookDetail,
                },
                {
                    name: 'read',
                    path: '/read',
                    component: read,
                }, {
                    name: 'dynamic',
                    path: '/dynamic',
                    component: dynamic
                }, {
                    name: 'dynamicAdd',
                    path: '/dynamic_add',
                    component: dynamicAdd
                }, {
                    name: 'category',
                    path: '/category',
                    component: category
                }, {
                    name: 'paper',
                    path: '/paper',
                    component: paper
                }, {
                    name: 'hot',
                    path: '/hot',
                    component: hotList
                }, {
                    path: '/test',
                    component: test
                }, {
                    name: 'searchRes',
                    path: '/search_res',
                    component: searchResult,
                }, {
                    path: '*',
                    component: page404
                }
            ]
        }

    ]
})
