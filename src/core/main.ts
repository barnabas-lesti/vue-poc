import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './app.vue';
import i18n from './i18n';
import router from './router';
import './main.scss';
import '../views';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());

app.mount('#app');
