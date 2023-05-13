import './assets/style.scss'

// import font
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//  add library icons
library.add(fas, faFacebookF, faLinkedinIn, faGooglePlusG)
const app = createApp(App)

app.component('fa', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
