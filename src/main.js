import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/swiper-bundle.css'
import VueNumberInput from '@chenfengyuan/vue-number-input';

const app = createApp(App);

app.component(VueNumberInput.name, VueNumberInput);
app.use(store);
app.use(router);
app.mount('#app');