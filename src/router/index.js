import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('token')&&to.path=='/about'){
    next('/')
  }else{
    if(localStorage.getItem('token')&&to.path=='/'){
      next('/about')
    }
    console.log('55');
  }
  next()
})
export default router
