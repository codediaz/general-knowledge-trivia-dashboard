import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Charts from '../views/ChartsView.vue'
import Quiz from '../views/QuizView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Charts
  },
  {
    path: '/questionnaires',
    name: 'questionnaires',
    component: Quiz
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
