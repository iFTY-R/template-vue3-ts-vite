import { createApp } from 'vue'
import App from './App.vue'
import { naive } from './utils/demand-import'
import router from '@/router'
import { createPinia } from 'pinia'

createApp(App)
  .use(naive)
  .use(router)
  .use(createPinia())
  .mount('#app')
