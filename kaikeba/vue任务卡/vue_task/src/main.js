import Vue from 'vue'
import App from './App.vue'
import './plugins/antd.config.js'
import router from './router'
import store from './store'
import http from'./utils/http'

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
