import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';

import Home from '../pages/Home.vue';
import Main from '../pages/Main.vue';



const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/main/:type',
        name: 'main',
        component: Main,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;