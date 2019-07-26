<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar  dark app color="primary" clipped-left>            
      <v-toolbar-title>
        <router-link :to="{name: 'home'}">
          <img class="logo" alt="Parken" src="../assets/logo_white.png"> 
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items color="primary">
        <v-btn flat text router to="/">Inicio</v-btn>
        <v-btn flat text router to="/parkings">Estacionamientos</v-btn>
        <v-btn flat text router to="/users">Usuarios</v-btn>
        <v-btn flat text router to="/login" v-if="!auth">Iniciar Sesión</v-btn>
        <v-btn flat text @click="logout" v-if="auth">
          <span>Cerrar Sesión</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click="drawer = !drawer" v-if="!desktop"></v-toolbar-side-icon>
    </v-toolbar>
    
    <!-- <v-navigation-drawer clipped fixed open fixed v-model="drawer" app dark>  -->
    <v-navigation-drawer clipped fixed open app dark v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="80">
            <img src="/avatar-1.png" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1 text-xs-center">
            admin<br/>
            <span class="grey--text lighten-1 caption">Diego Osuna</span>
          </p>
          
        </v-flex>
        
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
  </nav>
</template>

<script>

export default {
  components: {  },

  data() {
    return {
      auth: true,
      desktop: true,
      // auth: window.$cookies.isKey("parken-auth"),
      drawer: false,
      links: [
        { icon: 'vpn_key', text: 'Iniciar Sesión', route: '/login', visibility: !this.auth },
        { icon: 'dashboard', text: 'Inicio', route: '/', visibility: this.auth },
        { icon: 'directions_car', text: 'Estacionamientos', route: '/parkings', visibility: this.auth },
        //{ icon: 'attach_money', text: 'Ventas', route: '/sales' },
        { icon: 'person', text: 'Usuarios', route: '/users', visibility: this.auth }
      ],
      snackbar: false    
    }
  },
  mounted() {
    
  //  this.auth = window.$cookies.isKey("parken-auth")
  //  console.log("auth = " + this.auth)
  //  this.auth = window.$cookies.get("parken-auth")
  //  console.log("created(): auth = " + this.auth + " | type: " + typeof this.auth)
  },
  created() {
    
  //  this.auth = window.$cookies.isKey("parken-auth")
  //  console.log("auth = " + this.auth)
  //  this.auth = window.$cookies.get("parken-auth")
  //  console.log("created(): auth = " + this.auth + " | type: " + typeof this.auth)
  },
  updated() {
    // console.log("Navbar: updated() jumped in! | auth = " + this.auth)
    //  this.auth = this.getCookie("parken-auth")
  //  this.auth = window.$cookies.isKey("parken-auth")
  //  console.log("auth = " + this.auth)
    // console.log("updated(): auth = " + this.auth + " | type: " + typeof this.auth)
  }, 
  methods: {
    logout(){
    /*  document.cookie = "parken-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.auth = window.$cookies.isKey("parken-auth")
      console.log("auth = " + this.auth)
      this.drawer = false; */
      this.$router.push({ name: 'login' })
    },
    /*getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          console.log(c.substring(name.length, c.length))
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }*/
  },
  
}
</script>

<style>
.logo { 
  max-height: 40px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);  
}
.logo:hover {
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
     filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  /*opacity: 0.8;*/
}
</style>

