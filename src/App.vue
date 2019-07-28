<template>
  <v-app class="grey lighten-4">
    <Navbar/>
      <v-content>
          <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
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
  @import "https://cdn.jsdelivr.net/npm/animate.css";

  .page{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
