import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './styles/styles.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUh4mBTJ_n5k1PtI8y8hUw3xtk0JkUXO0',
  },
})
