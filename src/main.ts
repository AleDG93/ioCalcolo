import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import i18n from '@/plugins/i18n';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'; // Choose your PrimeVue theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import router from "./router";
import { RouterLink, RouterView } from 'vue-router';
import { createPinia } from 'pinia';
import ToastService from 'primevue/toastservice';
import {createMetaManager} from 'vue-meta'

const app = createApp(App);
app.use(PrimeVue);
app.use(i18n)
app.use(router);
app.use(createPinia());
app.use(ToastService);
app.use(createMetaManager());
// register router-link so Primevue doesn't complain
app.component('router-link', RouterLink);
app.component('router-view', RouterView);

app.mount('#app');