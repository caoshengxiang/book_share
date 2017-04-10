import Vue from 'vue'

import router from './router'

import App from './app.vue'

import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

new Vue({
    el: '#app',
    store,
    router,
    // components: { App }
    render: h => h(App)
})