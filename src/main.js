import { createApp } from 'vue'
import { Quasar } from 'quasar'
import {router} from './routes/routes.js'
import VueEasyLightbox from 'vue-easy-lightbox'


import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'


import App from './App.vue'



const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {},
})
myApp.use(VueEasyLightbox)
myApp.use(router)
myApp.mount('#app')
