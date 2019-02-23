import 'shitajicss/docs/css/shitaji.min.css'
import './scss/style.scss'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
