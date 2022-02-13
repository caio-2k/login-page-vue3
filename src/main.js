import { createApp } from 'vue'

import App from './App.vue'

// Vue-router import
import router from './router/router.js'

// ---- CSS Imports ----

// Tailwind CSS import
import './assets/css/tailwind.css'

// Fonts CSS
import './assets/css/fonts.css'

// ---- Mounting packages, plugins and vue app ---- 
const app = createApp(App)
app.use(router)
.mount('#app')
