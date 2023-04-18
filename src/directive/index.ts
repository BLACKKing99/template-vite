import { App } from 'vue'

const dirModule = import.meta.glob('./module/*.ts', { eager: true })

export const setupDirective = (app:App) => {
  for (const key in dirModule) {
    const item = dirModule[key] as any
    const name = key.split('/')[2].split('.')[0]
    app.directive(name, item.default)
  }
}
