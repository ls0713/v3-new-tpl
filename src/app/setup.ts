import type { App } from 'vue'

import { setupPinia } from './pinia'

import { setupRouter } from './router'

export async function setupApp (app: App) {
  app.use(setupPinia())
  await setupRouter(app)
}
