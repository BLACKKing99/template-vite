import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugin'
import './style/index.scss'

function mountedApp () {
  const app = createApp(App)
  setupPlugins(app)
  app.mount('#app')
}

mountedApp()
