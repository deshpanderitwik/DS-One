<template>
  <div class="wrapper">
    <v-toolbar class="orange" light fixed>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title>DimSum</v-toolbar-title>
    </v-toolbar>

    <div class="content">
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </div>

    <v-card>
      <v-bottom-nav absolute value="true" class="grey lighten-4 elevation-2 bottom-fixed">

        <router-link to="/">
          <v-btn flat dark class="orange--text" @click.native="el = 1" :value="el === 1">
            <span>Problems</span>
            <img src="./assets/icon-problem.svg">
          </v-btn>
        </router-link>

        <router-link to="/truths">
          <v-btn flat dark class="orange--text" @click.native="el = 2" :value="el === 2">
            <span>Truths</span>
            <img src="./assets/icon-truth.svg">
          </v-btn>
        </router-link>

        <router-link to="/form">
          <v-btn
            absolute
            dark
            fab
            top
            right
            class="orange btn--active"
          >
            <v-icon class="white--text">add</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/concepts">
          <v-btn flat dark class="orange--text" @click.native="el = 3" :value="el === 3">
            <span>Concept</span>
            <img src="./assets/icon-concept.svg">
          </v-btn>
        </router-link>

        <router-link to="/collabs">
          <v-btn flat dark class="orange--text" @click.native="el = 4" :value="el === 4">
            <span>Collab</span>
            <img src="./assets/icon-collab.svg">
          </v-btn>
        </router-link>

      </v-bottom-nav>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      el: 1
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')

  body {
    background-color: #E1E2E1;
  }

  h4 {
    font-size: 20.4px;
    margin-bottom: 0px;
  }
  h6 {
    font-size: 12px;
    color: #F58029;
    margin-bottom: 0px;
  }

  a {
    text-decoration: none;
  }

  .dimsum-background {
    background-image: url("./assets/dimSumNav.png");
    background-position: center right;
    background-size: 100%;
  }

  .cardsWrapper {
    width: 95%;
    margin: auto;
    padding-top: 72px;
    padding-bottom: 72px;
  }

  .card {
    margin-bottom: 8px;
  }

  .bottom-fixed {
    position:fixed;
  }

  .v-btn span {
    text-decoration: none;
  }
</style>
