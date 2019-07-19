<template>
  <div class="team">

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <EditUserPopup />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
  import EditUserPopup from "@/components/EditUserPopup"

  export default {
    components: { EditUserPopup },
    data() {
      return {
        team: [
          { name: 'Usuario1', role: 'Administrador de Sistema', avatar: '/avatar-1.png' },
          { name: 'Usuario2', role: 'Dueño', avatar: '/avatar-2.png' },
          { name: 'Usuario3', role: 'Encargado', avatar: '/avatar-3.png' },
          { name: 'Usuario4', role: 'Empleado', avatar: '/avatar-4.png' },
          { name: 'Usuario5', role: 'Empleado', avatar: '/avatar-5.png' },
        ]
      }
    }
  }
</script>