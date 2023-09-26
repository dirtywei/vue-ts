import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './stores'
import { setupRouter } from './router'

import 'uno.css'

async function setupApp() {
  const app = createApp(App)
  setupStore(app) //pinia
  await setupRouter(app) //router

  app.mount('#app') // mount app
}
setupApp()
