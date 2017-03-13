/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const p1 = resolve => require.ensure([], () => resolve(require('../pages/p1/one.vue')), 'page1')
const p2 = resolve => require.ensure([], () => resolve(require('../pages/p2/two.vue')), 'page2')


export default new Router({
  routes: [
    {
      path: '',
      component: p1,
    },
    {
      path: '/p1',
      component: p1,
    },
    {
      path: '/p2',
      component: p2
    }
  ]
})
