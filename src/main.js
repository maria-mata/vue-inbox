// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Icon from 'vue-awesome/components/Icon'
/* Pick one way between the 2 following ways */
// only import the icons you use to reduce bundle size
// import 'vue-awesome/icons/flag'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

/* Register component with one of 2 methods */

Vue.use(BootstrapVue);
Vue.component('icon', Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
   }
})
