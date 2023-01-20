// trunk-ignore(prettier)
window.Vue = require('vue');
window.axios = require('axios');

import Vue from 'vue';
import router from './routes.js';
import App from './components/App.vue';


const root = new Vue({
    el: "#root",
    router,
    render: (h) => h(App),
});
