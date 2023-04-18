import { setupRouter } from '@/router'
import type { App } from 'vue'
import { setupTailWind } from './module/tailwind'
import { setupDirective } from '@/directive'
export const setupPlugins = (app:App) => {
  setupRouter(app)
  setupTailWind()
  setupDirective(app)
}
