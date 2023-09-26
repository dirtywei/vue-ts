import { Router } from 'vue-router'
import { createGuardPageTitle } from './guard-page-title'
import { createGuardPermission } from './guard-permission'

export function setupRouterGuard(router: Router) {
  createGuardPermission(router)
  createGuardPageTitle(router)
}
