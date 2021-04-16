import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//3rd party
import 'bootstrap/scss/bootstrap.scss'

createApp(App).use(store).use(router).mount('#app')
