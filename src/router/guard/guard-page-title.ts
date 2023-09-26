import { Router } from 'vue-router'
const baseTitle = import.meta.env.VITE_TITLE

export function createGuardPageTitle(router: Router) {
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
