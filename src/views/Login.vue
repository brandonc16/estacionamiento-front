<template>
  <div class="login page">
    <div class="bg_overlay">
    </div>
    <v-container class="my-5">
      <v-layout align-center class="justify-center">
        <v-flex xs12 sm8 md3>
          <v-card class="pa-4" elevation="5">
            <v-card-text class="justify-center">
              <p class="text-xs-center"><v-icon x-large class="avatar" color="grey lighten-1">account_circle</v-icon></p>
              <h1 class="text-xs-center mb-3">Iniciar Sesión</h1>

              <p class="text-xs-center mb-4">Por favor introduzca su nombre de usuario y&nbsp;contraseña.</p>
              <v-form>
                <v-text-field prepend-icon="person" v-model="userName" label="Nombre de Usuario"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="password" label="Contraseña" type="password"></v-text-field>
              </v-form>
              <p class="text-xs-center red--text" v-if="feedback">{{ feedback }}</p>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="info" @click="login">Iniciar Sesión</v-btn>
            </v-card-actions>
          </v-card>          
        </v-flex>
      </v-layout>

      
      
    </v-container>
  </div>
</template>

<script>
// import VueCookies from 'vue-cookies'

export default {
  name: 'Login',
  data(){
    return {
      userName: "admin",
      password: "123",
      feedback: null,
      users: [
        { userName: 'admin', password: '123', firstName: 'Diego', lastName: 'Osuna', email: 'diego.osunag@gmail.com', status: 'Activo', userType: 'Administrador', created: '01/07/2019'},
        { userName: 'jperez', password: 'abc', firstName: 'Juán', lastName: 'Pérez', email: 'juanp@gmail.com', status: 'Activo', userType: 'Dueño', created: '05/07/2019'},
        { userName: 'jlopez', password: '456', firstName: 'José', lastName: 'López', email: 'josel@yahoo.com', status: 'Activo', userType: 'Encargado', created: '10/07/2019'},
        { userName: 'msanchez', password: 'def', firstName: 'María', lastName: 'Sánchez', email: 'marias@hotmail.com', status: 'Inactivo', userType: 'Empleado', created: '13/07/2019'},
        { userName: 'mgonzalez', password: '789', firstName: 'Mario', lastName: 'González', email: 'mariog@gmail.com', status: 'Activo', userType: 'Empleado', created: '15/07/2019'}
      ],
      auth: false
    }
  },
  methods: {
    login(){
      console.log("login()")
      if(this.userName && this.password) {        
        this.users.forEach((user) => {
          if(((this.userName == user.email) || 
            (this.userName == user.userName)) && 
            (this.password == user.password)) {
              
            /*  window.$cookies.set("parken-auth", true, "Tue, 31 Dec 2019 23:59:00 UTC", "/")
              console.log("$cookies.set success!")*/
              this.$router.push({ name: 'home' })
          }else{
            this.feedback = 'Usuario y/o contraseña incorrectos'
          }
        })                       
      } else {
        this.feedback = 'Favor de llenar ambos campos'
      }
    }
  }
}
</script>

<style>
  .login {
    background-color: #f9f5d4;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/login_background.jpg");
    background-size: cover;
  }
  .bg_overlay {
    background-color: #f9f5d4;
    background-image: linear-gradient(225deg, #f9f5d4, #f2d8c4, #484147);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.75;
  }
  .avatar {
    font-size: 8em !important;
  }
</style>
