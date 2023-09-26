import { createPinia } from 'pinia'
import { App } from 'vue'

export * from './modules'

export function setupStore(app: App) {
  app.use(createPinia())
}
