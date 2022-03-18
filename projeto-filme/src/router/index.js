import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EsqueceuSenha from '../views/EsqueceuSenha.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
