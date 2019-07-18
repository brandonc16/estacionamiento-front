import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#FF9800',
    success: '#3cd1c2',
    info: '#4bc2ff',
    error: '#f83e70'
  }
})
