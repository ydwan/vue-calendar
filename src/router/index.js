import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import RangeTime from 'components/RangeTime'
import SingleTime from 'components/SingleTime'
import Pager from 'components/Pager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/rangeTime',
      name: 'RangeTime',
      component: RangeTime
    },
    {
      path: '/singleTime',
      name: 'SingleTime',
      component: SingleTime
    },
    {
       path: '/pager',
      name: 'Pager',
      component: Pager
    }
  ]
})
