import { setupLayouts } from 'virtual:generated-layouts'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import { setupRouterGuards } from './router-guards'

const routes = setupLayouts(generatedRoutes)

console.log('final routes:', routes)

export const router = createRouter({
  history: createWebHistory(),
  routes
})

export async function setupRouter(app: App) {
  setupRouterGuards(router)
  app.use(router)
  await router.isReady()
}
