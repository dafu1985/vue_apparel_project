import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// NodeNext resolution requires explicit extensions for relative imports
import router from './router/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
