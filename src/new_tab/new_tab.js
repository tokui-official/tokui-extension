import Vue from 'vue'
import App from './App'
import store from '../store'
import router from './router'
import vuetify from '../plugins/vuetify'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
})
