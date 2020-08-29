import Vue from 'vue'
import App from './App'
import store from '../store'
import router from './router'
import vuetify from '../plugins/vuetify'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://3.115.11.74/api";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
})
