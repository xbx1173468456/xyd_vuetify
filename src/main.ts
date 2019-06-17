import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins'
import './fontawesome'

// styles
import './styles/main.scss'

// global components
import VuePictureSwipe from 'vue-picture-swipe'
Vue.component('vue-picture-swipe', VuePictureSwipe)

// vconsole
import VConsole from 'vconsole'

// set moment
import moment from 'moment'
moment.locale('zh-CN')

if (process.env.NODE_ENV === 'production') {
  var vConsole = new VConsole()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
