
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Finance from '@/components/Finance.vue'; // Adjust the import path based on your project structure
import Proportion from '@/components/Proportion.vue';
import HomePage from '@/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/finance',
        component: Finance,
    },

    {
        path: '/math/proportion',
        component: Proportion,
    },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;