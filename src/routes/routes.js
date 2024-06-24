import contacto from '../components/contacto.vue'
import habitaciones from '../components/habitaciones.vue'
import deportes from '../components/deportes.vue'
import servicios from '../components/servicios.vue'
import home from '../components/home.vue'

import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
    { path: '/', component: home },
    { path: '/contacto', component: contacto },
    { path: '/habitaciones', component: habitaciones },
    { path: '/deportes', component: deportes },
    { path: '/servicios', component: servicios }

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})