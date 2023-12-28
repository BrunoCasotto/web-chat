import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';
import '@/assets/scss/theme.scss';
import '@/assets/scss/reset.scss';

import { createPinia } from 'pinia';
import { initializeFirebase } from './gateways/firebase.';

initializeFirebase();

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
