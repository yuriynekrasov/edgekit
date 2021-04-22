import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.css'

import DKToast from 'vue-dk-toast';

createApp(App)
    .use(DKToast)
    .use(store)
    .use(router)
    .mount('#app')
