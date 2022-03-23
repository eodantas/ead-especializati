import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import router from './router'
import 'animate.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Notifications)
router.isReady().then(() => {
  app.mount('#app')
})
