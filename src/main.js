import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueProgressBar from 'vue-progressbar';
import Router from './routes.js';
import _ from 'lodash';

Vue.config.debug = true;

Vue.use(_);
Vue.use(VueResource);
Vue.use(VueProgressBar, {
    color: 'rgb(25, 169, 133)',
    failedColor: 'red',
    height: '2px'
})

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
})
