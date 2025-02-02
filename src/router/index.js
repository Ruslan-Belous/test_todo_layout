import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import LoginPage from '../views/LoginPage.vue'
import TodoPage from '../views/TodoPage.vue'


function isAuthenticated() {
  return store.state.isUserLogged;
}
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,

  },
  {
    path: '/todo',
    name: 'TodoPage',
    component: TodoPage,
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach(async (to, from, next) => {
  store.state.isUserLogged = localStorage.getItem('isUserLogged')
  if (to.name !== 'Login' && !store.state.isUserLogged) {
    store.state.isUserLogged = localStorage.getItem('isUserLogged')
    return next({ name: 'Login' })
  }
  else next()
})
export default router
