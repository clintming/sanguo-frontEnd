import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import DbCompare from '@/views/DbCompare'
import UIReports from '@/views/UIReports'
import ApiMgmt from '@/views/toolsMgmt/ApiMgmt'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/dbcompare',
          name: '数据表比较',
          component: DbCompare
        },
        {
          path: '/UIReports',
          name: 'UI测试汇总',
          component: UIReports
        },
        {
          path: 'ApiMgmt',
          name: 'Api管理',
          component: ApiMgmt
        }
      ]
    }
  ]
})
