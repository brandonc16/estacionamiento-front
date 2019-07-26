<template>
  <v-app class="grey lighten-4">
    <Navbar/>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
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
  created() {
    /* this.auth = window.$cookies.isKey("parken-auth")
    console.log("App.vue has been created! | auth = " + this.auth) */
  },
  updated() {
    /* this.auth = window.$cookies.isKey("parken-auth")
    console.log("App.vue has been updated! | auth = " + this.auth) */
  }
}
</script>

<style>


</style>
