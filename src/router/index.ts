import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/views/layout/Layout.vue'
import MenuView from '@/views/layout/MenuView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    meta: { title: '首页', },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { title: '一个页面', icon: 'appstore' },
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: '关于我们' },
      },
      {
        path: 'a',
        component: MenuView,
        meta: { title: '一级菜单' },
        children: [
          {
            path: 'b',
            component: MenuView,
            meta: { title: '二级菜单' },
            children: [
              {
                path: 'list',
                meta: { title: '列表' },
                component: () => import('@/views/a/b/list')
              },
              {
                path: 'create',
                meta: { title: '新增' },
                component: () => import('@/views/a/b/create')
              },
            ]
          }
        ]
      },
      {
        path: 'user',
        component: MenuView,
        meta: { title: '用户管理' },
        children: [
          {
            path: 'list',
            meta: { title: '列表' },
            component: () => import('../views/user/list')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
