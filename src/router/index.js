import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Best from '@/components/Best'
import News from '@/components/News'
import Top from '@/components/Top'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/best',
      name: 'Best',
      component: Best
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      // dynamic segments start with a colon
      path: '/user/:id',
      name: 'User',
      component: User
    }
  ]
})
