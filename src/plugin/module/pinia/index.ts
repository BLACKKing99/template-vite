import { createPinia } from 'pinia'
import { App } from 'vue'
export const setupPinia = (app:App) => {
  app.use(createPinia())
}
