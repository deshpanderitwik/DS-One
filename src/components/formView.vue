<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>

        <v-layout row>
          <v-flex xs4>
            <v-subheader>Problem</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="form-problem"
              label="What is wrong with the world?"
              id="form-problem"
              v-model="newIdea.problem"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs4>
            <v-subheader>Truth</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="form-truth"
              label="What's an incredible insight?"
              id="form-truth"
              v-model="newIdea.truth"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs4>
            <v-subheader>Concept Title</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="form-concept-title"
              label="What's your concept called?"
              id="form-concept-title"
              v-model="newIdea.conceptTitle"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs4>
            <v-subheader>Concept</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="form-concept"
              label="What is the concept?"
              id="form-concept"
              v-model="newIdea.concept"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs4>
            <v-subheader>Collaborator</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="form-collaborator"
              label="Who are you going to make this with?"
              id="form-collaborator"
              v-model="newIdea.collab"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <router-link to="/">
          <v-btn dark default v-on:click.native="addIdea">Submit</v-btn>
        </router-link>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import db from '../services/firebase'

let ideasRef = db.ref().child('ideas')

export default {
  name: 'problems',
  firebase: {
    ideas: ideasRef
  },
  data () {
    return {
      newIdea: {
        problem: '',
        truth: '',
        conceptTitle: '',
        concept: '',
        collab: ''
      }
    }
  },
  methods: {
    addIdea: function () {
      ideasRef.push(this.newIdea)
      this.newIdea.problem = ''
      this.newIdea.truth = ''
      this.newIdea.conceptTitle = ''
      this.newIdea.concept = ''
      this.newIdea.collab = ''
      console.log(this.newIdea)
    }
  }
}
</script>
<style scoped>
</style>

