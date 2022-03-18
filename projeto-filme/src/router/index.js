import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import CartazFilmes from '../views/CartazFilmes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Filmes',
    name: 'Filmes',
    component: CartazFilmes
  },
  {
    path: '/Series',
    name: 'Series',
    component: CartazSeries
  },
  {
    path: '/Documentarios',
    name: 'Documentários',
    component: CartazSeries
  }
]

const router = new VueRouter({
  routes
})

export default router
