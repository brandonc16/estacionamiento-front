<template>
  <div class="home">

    <v-container class="my-5">
      
      <v-layout row class="mb-3">

        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          <span>Sort projects by person name</span>
        </v-tooltip>

      </v-layout>

      <v-card flat class="" v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
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

        projects: [
          { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla rerum delectus minima aperiam laboriosam laborum veniam deleniti eligendi? Eveniet consequuntur inventore eum ex facilis ea, ducimus quidem maiores quas animi.' },
          { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis deleniti magnam numquam maxime, itaque quisquam tempore dolore impedit similique quo reprehenderit debitis commodi repellendus, pariatur porro eum in modi ratione!' },
          { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo temporibus possimus distinctio cumque in, velit iusto culpa cum, adipisci praesentium laborum recusandae veritatis illo unde ad eum quidem ullam molestiae?' },
          { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum rerum odit exercitationem iusto. Dolores minima deserunt ipsum, atque totam excepturi, cumque minus nisi animi delectus nihil officia laborum doloribus.' },
        ]
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

  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  .v-chip.complete {
    background:  #3cd1c2;
  }
  .v-chip.ongoing {
    background:  orange;
  }
  .v-chip.overdue {
    background:  tomato;
  }

</style>

