import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EsqueceuSenha from '../views/EsqueceuSenha.vue'
import Inicio from '../views/Inicio.vue'
import CartazFilmes from '../views/CartazFilmes.vue'
import Mensagem from '../views/Mensagem.vue'
import Inicio from '../views/Inicio'
import CartazFilmes from '../views/CartazFilmes'
import CartazSeries from '../views/CartazSeries'
import CartazDocumentarios from '../views/CartazDocumentarios'
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
    path: '/Series',
    name: 'Series',
    component: CartazSeries
  },
  {
    path: '/Documentarios',
    name: 'Documentários',
    component: CartazDocumentarios
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
