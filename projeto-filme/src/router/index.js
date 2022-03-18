import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio'
import CartazFilmes from '../views/CartazFilmes'
import CartazSeries from '../views/CartazSeries'
import CartazDocumentarios from '../views/CartazDocumentarios'

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
    component: CartazDocumentarios
  }
]

const router = new VueRouter({
  routes
})

export default router
