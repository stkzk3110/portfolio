import 'shitajicss/docs/css/shitaji.min.css'
import './scss/style.scss'
import './scss/custom.scss'
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')
import BootstrapVue from 'bootstrap-vue'
import router from './router/index'
import App from './App.vue'

Vue.use(BootstrapVue,VueAxios,Axios)

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
