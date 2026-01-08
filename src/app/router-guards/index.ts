import type { Router } from 'vue-router'
import { setupAuthGuard } from './auth.guard'

export function setupRouterGuards(router: Router) {
  setupAuthGuard(router)
}
