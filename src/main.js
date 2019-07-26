import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.mixin({
  data: function() {
    return {
      isAuthenticated : VueCookies.$cookies.isKey("parken-auth")      
    }
  }
})
