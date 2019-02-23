import 'shitajicss/docs/css/shitaji.min.css'
import './scss/style.scss'
import './scss/custom.scss'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import App from './App.vue'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
