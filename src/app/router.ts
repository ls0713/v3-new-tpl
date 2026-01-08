import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { setupRouterGuards } from './router-guards'

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export async function setupRouter(app: App) {
  setupRouterGuards(router)
  app.use(router)
  await router.isReady()
}
