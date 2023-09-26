import { Router } from 'vue-router'

export function createGuardPermission(router: Router) {
  router.beforeEach(async (to) => {
    console.log(to)
    /** 没有token的情况 */
    // if (token) {
    //   return { path: 'login', query: { ...to.query, redirect: to.path } }
    // }
    /** 有token的情况 */
    // if (to.path === '/login') return { path: '/' }

    return true
  })
}
