export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/TheHome.vue'),
    meta: {
      title: '首页',
      requiresAuth: false,
      keepAlive: true
    }
  }
]
