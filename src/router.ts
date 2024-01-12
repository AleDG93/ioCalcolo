
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Proportion from '@/components/Proportion.vue';
import HomePage from '@/pages/HomePage.vue';
import Calculator from './components/Calculator.vue';
import Average from './components/Average.vue';
import FiscalCode from './components/FiscalCode.vue';
import Geometry from './components/Geometry.vue';
import DatesDifference from './components/DatesDifference.vue';
import UnitMeasures from './components/UnitMeasures.vue';
import DocumentReader from './components/DocumentReader.vue';
import CompositInterest from './components/CompositInterest.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/finanza/interesse-composto',
        component: CompositInterest,
    },
    {
        path: '/matematica/proporzioni',
        component: Proportion,
    },
    {
        path: '/matematica/calcolatrice',
        component: Calculator,
    },
    {
        path: '/matematica/media-ponderata',
        component: Average,
    },
    {
        path: '/matematica/area-volume',
        component: Geometry,
    },
    {
        path: '/date/calcolo-date',
        component: DatesDifference,
    },
    {
        path: '/documenti/codice-fiscale',
        component: FiscalCode,
    },
    {
        path: '/convertitore/unita-di-misura',
        component: UnitMeasures,
    },
    {
        path: '/convertitore/contatore-parole-caratteri',
        component: DocumentReader,
    },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;