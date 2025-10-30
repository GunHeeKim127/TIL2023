// // src/main.js
// import { createApp } from 'vue'
// import App from './App.vue'

// // Vuetify styles & setup
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// // MDI 아이콘 세트
// import '@mdi/font/css/materialdesignicons.css'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'

// const vuetify = createVuetify({
//   components,
//   directives,
//   icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: { mdi },
//   },
// })

// createApp(App).use(vuetify).mount('#app')

// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 아이콘셋(폰트 방식)
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// 라우터
import { router } from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
})

createApp(App).use(vuetify).use(router).mount('#app')
