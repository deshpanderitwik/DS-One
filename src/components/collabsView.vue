<template>
  <div class="collabCards cardsWrapper">
    <v-layout row wrap>
      <v-flex v-for="idea in ideas" :key="idea.id" xs12 sm6 md4>
        <v-card class="collabCard grey lighten-4 elevation-1">
          <v-card-text>
            <div><h6>COLLABORATOR</h6></div>
            <div><h4>{{ idea.collab }}</h4></div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import db from '../services/firebase'

let ideasRef = db.ref().child('ideas')

export default {
  name: 'form',
  firebase: {
    ideas: ideasRef
  }
}

</script>

<style>
</style>
