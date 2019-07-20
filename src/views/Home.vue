<template>
  <div class="home">

    <v-container class="my-5">
      
      <v-layout row class="mb-3">
        <v-flex xs12 sm4>
          <v-combobox md6 v-model="selectedParking" :items="parkingsNames" label="Estacionamiento"></v-combobox>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm2>
          <v-btn color="info" dark class="mb-2" v-on="on">
            <v-icon left>directions_car</v-icon>
            <span>Ingresar Auto</span>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-card flat class="" v-for="car in cars" :key="car.id">
        <v-layout row wrap :class="`pa-3 project ${car.status}`">
          <v-flex xs12 md2>
            <div class="caption grey--text">Matricula</div>
            <div>{{car.plate}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Marca</div>
            <div>{{car.brand}}</div>
          </v-flex>
          <v-flex xs6 sm4 md1> 
            <div class="caption grey--text">Modelo</div>
            <div>{{car.model}}</div>
          </v-flex>
          <v-flex xs2 sm2 md1>
            <v-chip small :class="`${car.color} white--text caption my-2`">{{ car.color }}</v-chip>
          </v-flex>
          <v-flex xs6 sm2 md1> 
            <div class="caption grey--text">Ingreso</div>
            <div>{{car.arrived}}</div>
          </v-flex>
          <v-flex xs6 sm2 md1> 
            <div class="caption grey--text">Salida</div>
            <div>{{car.exit}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2> 
            <div class="caption grey--text">Monto a pagar</div>
            <div>{{car.charge}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${car.status} white--text caption my-2`">{{ car.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
  // import db from '@/fb'

  export default {
    data() {
      return {
        // projects: []

        parkings: [
          { name: 'La Central', description: 'Lorem Ipsum, dolor amet', slots: '40', city: 'Mazatlán' },
          { name: 'Olas Altas', description: 'Lorem Ipsum, dolor amet', slots: '30', city: 'Mazatlán' },
          { name: 'Tres Ríos', description: 'Lorem Ipsum, dolor amet', slots: '35', city: 'Culiacán' },
          { name: 'Don José', description: 'Lorem Ipsum, dolor amet', slots: '200', city: 'Mazatlán' },
          { name: 'Buelna', description: 'Lorem Ipsum, dolor amet', slots: '20', city: 'Culiacán' },
          { name: 'San Juán', description: 'Lorem Ipsum, dolor amet', slots: '25', city: 'Los Mochis' }
        ],
        parkingsNames: [ 'La Central', 'Olas Altas', 'Tres Ríos', 'Don José', 'Buelna', 'San Juán'],
        cars: [
          { plate: 'VSH 80 15', brand: 'Ford', model: 'Focus', color: 'verde', arrived: '10:00', exit: '-', status: 'adentro', charge: '$100.00' },
          { plate: 'VGB 91 72', brand: 'Chevrolet', model: 'Aveo', color: 'rojo', arrived: '9:12', exit: '-', status: 'adentro', charge: '$110.00' },
          { plate: 'VUT 12 39', brand: 'Honda', model: 'Accord', color: 'azul', arrived: '14:00', exit: '-', status: 'adentro', charge: '$60.00' },
          { plate: 'VPL 98 78', brand: 'Kia', model: 'Forte', color: 'plata', arrived: '8:30', exit: '14:00', status: 'fuera', charge: '$60.00' },
          { plate: 'TRH 82 29', brand: 'Ford', model: 'Escape', color: 'negro', arrived: '12:10', exit: '17:00', status: 'fuera', charge: '$50.00' },
        ],

        selectedParking: 'La Central',
      }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1);
      }
    },
    created() {
      
      /* db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === 'added') {
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })*/
    }
  }
</script>

<style>

  .project.fuera {
    border-left: 4px solid #3cd1c2;
  }
  .project.adentro {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  .v-chip.fuera {
    background:  #3cd1c2;
  }
  .v-chip.adentro {
    background:  orange;
  }
  .v-chip.overdue {
    background:  tomato;
  }
  .v-chip.verde {
    background:  green;
  }
  .v-chip.rojo {
    background:  red;
  }
  .v-chip.azul {
    background:  blue;
  }
  .v-chip.plata {
    background:  gray;
  }
  .v-chip.negro {
    background:  black;
  }

</style>

