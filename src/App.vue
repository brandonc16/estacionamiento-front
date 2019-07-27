<template>
  <v-app class="grey lighten-4">
    <Navbar/>
      <v-content>
          <transition name="fade" mode="out-in">
          <router-view></router-view>
          </transition>
      </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
// import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: { Navbar },
    
  data () {
    return {
      //
    }
  },
   updated() {
    console.log("App.vue has been updated!")
  }
}
</script>

<style>
</style>
