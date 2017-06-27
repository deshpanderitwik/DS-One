<template>
  <div class="conceptCards cardsWrapper">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="conceptCard grey lighten-4" v-for="idea in ideas">
          <v-card-text>
            <div><h6>CONCEPT</h6></div>
            <div><h3>{{ idea.conceptTitle }}</h3></div>
            <div><h4>{{ idea.concept }}</h4></div>
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
