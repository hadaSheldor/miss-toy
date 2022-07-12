import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/styles.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
app.use(ElementPlus)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUh4mBTJ_n5k1PtI8y8hUw3xtk0JkUXO0',
  },
})
