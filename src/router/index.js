import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

const requireModule = require.context('./modules', true, /\.js$/)
const module = requireModule.keys().map(key => requireModule(key).default)
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/collect',
    children: [
      ...module
    ]
  },
  {
    path: '/print',
    name: 'print',
    component: () => import('@/views/Print.vue')
  }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  to.matched.some(record => console.log(record.meta))
  next()
})

export default router
