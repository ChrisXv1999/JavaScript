import { createRouter, createWebHistory } from 'vue-router'
import { isLogin } from '@/util/user'
import HomeView from '../views/user/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {path: '',name:'main',component: ()=> import('../views/user/MainView.vue')},
      {path: 'goods',name:'goods',component: ()=> import('../views/user/GoodsView.vue')},
      {path: 'about',name:'about',component: ()=> import('../views/user/AboutView.vue')},
      {path: 'detail/:id',name:'detail',component: ()=> import('../views/user/GoodsDetail.vue')},
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/login',
    children: [
      { path: 'login', name: 'admin-login', component: () => import('../views/LoginView.vue'), meta: { adminPage: true } },
      {
        path: 'home', name: 'admin-home', component: () => import('../views/admin/HomeView.vue'), redirect: '/admin/home/order-list', children: [
          { path: 'order-list', name: 'orderList', component: () => import('../views/admin/OrderList.vue') },
          { path: 'goods-manage', name: 'goodsManage', component: () => import('../views/admin/GoodsManage.vue') },
          { path: 'user-manage', name: 'userManage', component: () => import('../views/admin/UserManage.vue') },
          { path: 'tag-manage', name: 'tagManage', component: () => import('../views/admin/TagManage.vue') },
          { path: 'hot-manage', name: 'hotManage', component: () => import('../views/admin/HotManage.vue') },
          { path: 'system-manage', name: 'systemManage', component: () => import('../views/admin/SystemManage.vue') },
        ]
      },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach(()=>{
  window.scrollTo(0,0)
})
router.beforeEach((to, from) => {
  if (to?.path?.startsWith('/admin') && to.path !== '/admin/login') {
    if (!isLogin()) {
      router.push({ path: '/admin/login' })
    }
  }
  return true
})
export default router
