<template>
  <div class="about">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-container>
  </div>
</template>

<script>
  
  // import db from '@/fb'

  export default {
    data() {
      return {
        // projects: []
        myProjects: [
          { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla rerum delectus minima aperiam laboriosam laborum veniam deleniti eligendi? Eveniet consequuntur inventore eum ex facilis ea, ducimus quidem maiores quas animi.' },
          { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis deleniti magnam numquam maxime, itaque quisquam tempore dolore impedit similique quo reprehenderit debitis commodi repellendus, pariatur porro eum in modi ratione!' },
          { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo temporibus possimus distinctio cumque in, velit iusto culpa cum, adipisci praesentium laborum recusandae veritatis illo unde ad eum quidem ullam molestiae?' },
          { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatum rerum odit exercitationem iusto. Dolores minima deserunt ipsum, atque totam excepturi, cumque minus nisi animi delectus nihil officia laborum doloribus.' },
        ]
      }
    },
    computed: {
      /* myProjects(){
        return  this.projects.filter(project => {
          return project.person == 'The Net Ninja'
        })
      } */
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
      }) */
    }
  }
</script>