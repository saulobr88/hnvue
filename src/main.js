// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

// Custom directives
Vue.directive('theme', {
  bind (el, binding) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

// Filters
Vue.filter('formatDate', function (unixtime) {
  // Months array
  var monthsArr = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

  // Convert timestamp to milliseconds
  var date = new Date(unixtime * 1000)

  // Year
  var year = date.getFullYear()

  // Month
  var month = monthsArr[date.getMonth()]

  // Day
  var day = date.getDate()

  // Hours
  var hours = date.getHours()

  // Minutes
  var minutes = '0' + date.getMinutes()

  // Seconds
  var seconds = '0' + date.getSeconds()

  // Display date time in MM-dd-yyyy h:m:s format
  var convdataTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

  return convdataTime
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
