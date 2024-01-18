
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Proportion from '@/components/ReversePercentage.vue';
import HomePage from '@/pages/HomePage.vue';
import Calculator from './components/Calculator.vue';
import Average from './components/Average.vue';
import FiscalCodePage from './pages/FiscalCodePage.vue';
import Geometry from './components/Geometry.vue';
import UnitMeasures from './components/UnitMeasures.vue';
import DocumentReader from './components/DocumentReader.vue';
import CompositInterest from './components/CompositInterest.vue';
import PercentagePage from "./pages/PercentagePage.vue";
import DatePage from './pages/DatePage.vue';

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
        path: '/matematica/percentuale',
        component: PercentagePage,
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
        component: DatePage,
    },
    {
        path: '/documenti/codice-fiscale',
        component: FiscalCodePage,
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