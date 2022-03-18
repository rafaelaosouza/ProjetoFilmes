import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EsqueceuSenha from '../views/EsqueceuSenha.vue'
import Inicio from '../views/Inicio.vue'
import CartazFilmes from '../views/CartazFilmes.vue'

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
