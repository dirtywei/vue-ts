import { createRouter, createWebHistory } from 'vue-router'
import { moduleRoutes } from './routes'
import { setupRouterGuard } from './guard'
import { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...moduleRoutes,
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/login/TheLogin.vue'),
      meta: {
        title: '登录',
        requiresAuth: false,
        keepAlive: false
      }
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/error-page/TheError.vue'),
      meta: {
        title: '404',
        requiresAuth: false,
        keepAlive: false
      }
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export async function setupRouter(app: App) {
  setupRouterGuard(router)
  app.use(router)
}
