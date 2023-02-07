import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugin'

function mountedApp () {
  const app = createApp(App)
  app.config.isCustomElement = (tag) => {
    console.log(tag)
    return tag.startsWith('foo')
  }
  setupPlugins(app)
  app.mount('#app')
}

mountedApp()
