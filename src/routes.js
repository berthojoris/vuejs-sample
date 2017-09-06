import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('./components/Home.vue')
        },
        {
            path: '/about',
            component: require('./components/About.vue')
        },
        {
            path: '/terms',
            component: require('./components/Terms.vue')
        },
        {
            path: '/privacy',
            component: require('./components/Privacy.vue')
        }
    ]
})

export default router
