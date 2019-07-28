<template>
  <div class="parkings page">
    <v-container class="my-5">
      <v-data-table :headers="headers" :items="parkings" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td >{{ props.item.slots }}</td>
          <td >{{ props.item.city }}</td>
          <td >{{ props.item.description }}</td>
        </template>
      </v-data-table>
    </v-container>    
  </div>  
</template>

<script>
  export default {
    data () {
      return {
        headers: [          
          { text: 'Nombre', value: 'name' },
          { text: 'No. de Espacios', value: 'slots' },
          { text: 'Ciudad', value: 'city' },
          { text: 'Descripción', value: 'description' },
        ],
        parkings: [
          { name: 'La Central', description: 'Lorem Ipsum, dolor amet', slots: '40', city: 'Mazatlán' },
          { name: 'Olas Altas', description: 'Lorem Ipsum, dolor amet', slots: '30', city: 'Mazatlán' },
          { name: 'Tres Ríos', description: 'Lorem Ipsum, dolor amet', slots: '35', city: 'Culiacán' },
          { name: 'Don José', description: 'Lorem Ipsum, dolor amet', slots: '200', city: 'Mazatlán' },
          { name: 'Buelna', description: 'Lorem Ipsum, dolor amet', slots: '20', city: 'Culiacán' },
          { name: 'San Juán', description: 'Lorem Ipsum, dolor amet', slots: '25', city: 'Los Mochis' }
        ],
      }
    }
  }
</script>