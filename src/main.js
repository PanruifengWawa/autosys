// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */

Vue.directive('colorWatch', {
  bind: function (el, binding) {
    el.style.border = '1px solid #fff'
  }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
