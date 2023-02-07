import { setupRouter } from '@/router'
import type { App } from 'vue'
import { setupTailWind } from './module/tailwind'
export const setupPlugins = (app:App) => {
  setupRouter(app)
  setupTailWind()
}
