import { createApp } from 'vue'
import App from './App.vue'
import { Vuelidate } from 'vuelidate'
import './theme.css'

createApp(App)
  .use(Vuelidate)
  .mount('#app')
