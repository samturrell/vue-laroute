import Vue from 'vue'

import VueLaroute from './index';
import routes from './laroute';
Vue.use(VueLaroute, {
  routes,
})

new Vue({
  el: '#app'
})
