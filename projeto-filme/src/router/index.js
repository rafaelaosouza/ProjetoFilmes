import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import CartazFilmes from '../views/CartazFilmes.vue'
import ComprarIngressos from '../views/ComprarIngressos.vue'
import QuantidadeReserva from '../views/QuantidadeReserva.vue'
import MinhaReserva from '../views/MinhaReserva.vue'

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
    path: '/Ingressos',
    name: 'Ingressos',
    component: ComprarIngressos
  },
  {
    path: '/Quantidade',
    name: 'Quantidade',
    component: QuantidadeReserva
  },
  {
    path: '/Reserva',
    name: 'Reserva',
    component: MinhaReserva
  },
  // {
  //   path: '/Series',
  //   name: 'Series',
  //   component: CartazSeries
  // },
  // {
  //   path: '/Documentarios',
  //   name: 'Documentários',
  //   component: CartazSeries
  // }
]

const router = new VueRouter({
  routes
})

export default router
