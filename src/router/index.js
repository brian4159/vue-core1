import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import List from '@/components/list.vue'
import Form from '@/components/form.vue'

const routes = [
  {path: '/list', name: 'list',component: List},
  {path: '/add', name: 'add',component: Form},
  {path: '/edit/:id', name: 'edit',component: Form},
  {
    path:'*',
    redirect:'list'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
