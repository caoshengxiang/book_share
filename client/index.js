import Vue from 'vue'

import router from './router'

import App from './app.vue'

import store from './store'


new Vue({
    el: '#app',
    store,
    router,
    // components: { App }
    render: h => h(App)
})