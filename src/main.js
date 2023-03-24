import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/routes'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// import Select2 from 'vue3-select2-component';

let router = createRouter({
    history: createWebHistory(),
    routes: routes
});


const app = createApp(App)

app.use(router);
app.use(LoadingPlugin);
// app.component('Select2', Select2);
app.mount('#app');