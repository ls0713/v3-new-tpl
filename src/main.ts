import { createApp } from 'vue'

import 'element-plus/dist/index.css'
import '@/shared/styles/index.scss'
import '@/shared/styles/tailwind.css'
import '@/shared/styles/element/index.scss'

import { setupApp } from './app/setup'

import App from './app/App.vue'


async function bootstrap () {
  const APP_INSTANCE = createApp(App)
  await setupApp(APP_INSTANCE)
  APP_INSTANCE.mount('#app')
}

bootstrap()
