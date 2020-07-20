import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

import "./axios"
import "./permission"

Vue.use(ElementUI);

Vue.prototype.$axios = axios

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
