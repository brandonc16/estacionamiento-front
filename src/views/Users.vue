<template>
  <div class="users page">
    <v-container flat class="my-5">
      <v-toolbar flat >
        <v-toolbar-title>
          <v-icon left>person</v-icon>
          <span>Usuarios</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="info" dark class="mb-2" v-on="on">
              <v-icon left>person_add</v-icon>
              <span>Añadir Usuario</span>
            </v-btn>
          </template>

          <v-card class="pa-3">
            <v-card-title>
              <span class="headline">
                <v-icon medium left>person_add</v-icon>
                <span>Nuevo Usuario</span>
              </span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-text-field v-model="editedItem.firstName" label="Nombre"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field v-model="editedItem.lastName" label="Apellido"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-combobox v-model="editedItem.status" :items="statusOptions" label="Status"></v-combobox>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-combobox v-model="editedItem.userType" :items="userTypes" label="Tipo de Usuario"></v-combobox>
                  </v-flex>                  
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="info" @click="save">Guardar</v-btn>
              <v-btn color="info" flat @click="close">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>

      <v-data-table flat :headers="headers" :items="users" class="elevation-1" color="primary">        

        <template v-slot:items="props">
          <td>{{ props.item.userName }}</td>
          <td>{{ props.item.firstName }}</td>
          <td>{{ props.item.lastName }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.status }}</td>
          <td>{{ props.item.userType }}</td>
          <td>{{ props.item.created }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">
              edit
            </v-icon>
            <v-icon small @click="deleteItem(props.item)">
              delete
            </v-icon>
          </td>
        </template>        
        <template v-slot:pageText="props">
            {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Restablecer</v-btn>
        </template>
      </v-data-table>
      </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      dialog: false,
      rowsPerPageText: "Filas por página",
      props: {
        rowsPerPageText: "filas por página"
      },
      headers: [
          { text: 'Nombre de Usuario', value: 'userName' },
          { text: 'Nombre', value: 'firstName' },
          { text: 'Apellido', value: 'lastName' },
          { text: 'Email', value: 'email' },
          { text: 'Status', value: 'status' },
          { text: 'Tipo de Usuario', value: 'userType' },
          { text: 'Fecha de Creación', value: 'created' },
          { text: '', value: 'actions', sortable: false }
        ],
      users: [
          { userName: 'admin', password: '123', firstName: 'Diego', lastName: 'Osuna', email: 'diego.osunag@gmail.com', status: 'Activo', userType: 'Administrador', created: '01/07/2019'},
          { userName: 'jperez', password: '123', firstName: 'Juán', lastName: 'Pérez', email: 'juanp@gmail.com', status: 'Activo', userType: 'Dueño', created: '05/07/2019'},
          { userName: 'jlopez', password: '123', firstName: 'José', lastName: 'López', email: 'josel@yahoo.com', status: 'Activo', userType: 'Encargado', created: '10/07/2019'},
          { userName: 'msanchez', password: '123', firstName: 'María', lastName: 'Sánchez', email: 'marias@hotmail.com', status: 'Inactivo', userType: 'Empleado', created: '13/07/2019'},
          { userName: 'mgonzalez', password: '123', firstName: 'Mario', lastName: 'González', email: 'mariog@gmail.com', status: 'Activo', userType: 'Empleado', created: '15/07/2019'}
        ],
      statusOptions: [ "Activo", "Inactivo"],
      userTypes: [ "Administrador", "Dueño", "Encargado", "Empleado"],
      editedIndex: -1,
      editedItem: {
        firstName: '',
        lastName: '',
        email: '',
        status: 'Activo',
        userType: 'Administrador',
        created: ''
      },
      defaultItem: {
        firstName: '',
        lastName: '',
        email: '',
        status: '',
        userType: '',
        created: ''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.users = [
          { userName: 'admin', password: '123', firstName: 'Diego', lastName: 'Osuna', email: 'diego.osunag@gmail.com', status: 'Activo', userType: 'Administrador', created: '01/07/2019'},
          { userName: 'jperez', password: '123', firstName: 'Juán', lastName: 'Pérez', email: 'juanp@gmail.com', status: 'Activo', userType: 'Dueño', created: '05/07/2019'},
          { userName: 'jlopez', password: '123', firstName: 'José', lastName: 'López', email: 'josel@yahoo.com', status: 'Activo', userType: 'Encargado', created: '10/07/2019'},
          { userName: 'msanchez', password: '123', firstName: 'María', lastName: 'Sánchez', email: 'marias@hotmail.com', status: 'Inactivo', userType: 'Empleado', created: '13/07/2019'},
          { userName: 'mgonzalez', password: '123', firstName: 'Mario', lastName: 'González', email: 'mariog@gmail.com', status: 'Activo', userType: 'Empleado', created: '15/07/2019'}
        ]
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.users.indexOf(item)
        confirm('¿Esta seguro que quiere eliminar este usuario?') && this.users.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {

          var today = new Date()
          var date = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()

          this.editedItem.created = date.toString()
          this.users.push(this.editedItem)
        }
        this.close()
      },

      
    }
  }
</script>

<style>
  th {
    color: #fff !important;
    background-color: #FF9800;
    font-size: 1.2em !important;
  }

  th i{
    color: #fff !important;
  }
</style>
