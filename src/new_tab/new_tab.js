import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '../plugins/vuetify'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "https://tokui-api.herokuapp.com/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})
