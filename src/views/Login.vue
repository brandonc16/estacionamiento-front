<template>
  <div class="login">
    <v-container class="my-5">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card flat class="pa-4">
            <v-card-title>
              <v-spacer></v-spacer>
              <span class="headline">
                <span>Iniciar Sesión</span>
              </span>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
              <p class="text-xs-center">Por favor introduzca su nombre de usuario y&nbsp;contraseña.</p>
              <v-form>
                <v-text-field prepend-icon="person" v-model="userName" label="Nombre de Usuario"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="password" label="Contraseña" type="password"></v-text-field>
              </v-form>
              <p class="text-xs-center red--text" v-if="feedback">{{ feedback }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="info" @click="login">Iniciar Sesión</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
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
      if(this.userName && this.password) {        
        console.log("los campos fueron llenados!")
        
        this.users.forEach((user) => {
          if(((this.userName == user.email) || (this.userName == user.userName)) && (this.password == user.password)){
            console.log("userName y password correctos!")
            this.auth = "true"
          }
        })         

        if(this.auth){
          this.userName = null
          this.password = null
          this.feedback = null
          this.$router.push({ name: 'dashboard' })
        } else {
          this.feedback = 'Usuario y/o contraseña incorrectos'
        }        
      } else {
        this.feedback = 'Favor de llenar ambos campos'
      }
    }
  }
}
</script>

<style>
  
</style>
