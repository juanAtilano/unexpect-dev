// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import pluginRegister from './lib'
import Vuex from 'vuex'
import VueResources from 'vue-resource'
import {store} from './store'

Vue.use(pluginRegister)
Vue.use(Vuex)
Vue.use(VueResources)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
