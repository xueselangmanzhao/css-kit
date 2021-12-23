import { createApp } from 'vue';
import App from './App.vue';
import CssKit from '../packages';
import router from './router/index';
import Preview from './components/Preview.vue';

const app = createApp(App);
app.component('Preview', Preview);
app.use(CssKit);
app.use(router);
app.mount('#app');
