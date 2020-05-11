import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/NowPlaying'
import Comingsoon from '@/views/Film/ComingSoon'
import Top250 from '@/views/Film/Top250'
import Detail from '@/views/Detail'
import Search from '@/views/Search'
import Cinema from '@/views/Cinema'
import City from '@/views/City'
import Center from '@/views/Center'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowplaying', // /film/nowplaying
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: 'top250',
          component: Top250
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path:'/detail/:id',
      name:'movieDetail',
      component:Detail
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/cinema',
      component:Cinema
    },{
      path:'/city',
      component:City
    },{
      path:'/center',
      component:Center
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})

export default router
