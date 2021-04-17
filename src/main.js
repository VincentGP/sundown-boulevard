import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/swiper-bundle.css'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

const app = createApp(App);

app.component(VueNumberInput.name, VueNumberInput);
app.use(Datetime)
app.use(store);
app.use(router);
app.mount('#app');