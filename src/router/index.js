import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chart',
    name: 'chart',
    icon: 'mdi-view-dashboard',
    component: () => import('@/views/Chart.vue')
  },
  {
   path: '/calendar',
   name: 'calendar',
   icon: 'mdi-calendar',
   component: () => import('@/views/Calendar.vue')
  },
  {
   path: '/table',
   name: 'table',
   icon: 'mdi-table',
   component: () => import('@/views/Table.vue')
  },
  {
   path: '/sparkline',
   name: 'sparkline',
   icon: 'mdi-chart-line',
   component: () => import('@/views/Sparkline.vue')
  },
  {
   path: '/timeline',
   name: 'timeline',
   icon: 'mdi-timetable',
   component: () => import('@/views/Timeline.vue')
  },
  {
   path: '/icon',
   name: 'icon',
   icon: 'mdi-emoticon',
   component: () => import('@/views/Icon.vue')
  },
  {
   path: '/test',
   name: 'test',
   icon: 'mdi-block-helper',
   component: () => import('@/views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
