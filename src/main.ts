import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugin'

function mountedApp () {
  const app = createApp(App)
  setupPlugins(app)
  app.mount('#app')
}

mountedApp()
