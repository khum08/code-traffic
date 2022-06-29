import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';

import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';
import LineChart from '../components/LineChart.vue';
import TableChart from '../components/TableChart.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/line-charts',
        name: 'LineChart',
        component: LineChart
    },
    {
        path: '/table-charts',
        name: 'TableChart',
        component: TableChart
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;