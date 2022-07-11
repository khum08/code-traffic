import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';

import Home from '../pages/Home.vue';
import Detail from '../pages/Detail.vue';
import Main from '../pages/Main.vue';
import Statistic from '../pages/Statistic.vue';
import LineChart from '../components/LineChart.vue';
import TableChart from '../components/TableChart.vue';
import TrafficChart from '../components/Traffic.vue';



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
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
    },
    {
        path: '/traffic-charts',
        name: 'Traffic',
        component: TrafficChart
    },
    {
        path: '/statistic',
        name: 'Statistic',
        component: Statistic
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;