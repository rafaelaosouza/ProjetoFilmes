import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EsqueceuSenha from '../views/EsqueceuSenha.vue'
import Inicio from '../views/Inicio.vue'
import CartazFilmes from '../views/CartazFilmes.vue'
import ComprarIngressos from '../views/ComprarIngressos.vue'
import QuantidadeReserva from '../views/QuantidadeReserva.vue'
import MinhaReserva from '../views/MinhaReserva.vue'
import Mensagem from '../views/Mensagem.vue'
import NoticiasFilmes from '../views/NoticiasFilmes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/register',
    name: 'register',
    component:Register 
  },
  {
    path: '/esqueceusenha',
    name: 'esqueceusenha',
    component:EsqueceuSenha 
  },
  {
    path:'/mensagem',
    name: 'mensagem',
    component: Mensagem
  },
  {
    path:'/',
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
  {
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasFilmes
  }
]

const router = new VueRouter({
  routes
})

export default router
