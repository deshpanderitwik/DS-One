<template>
  <div class="wrapper">
    <v-toolbar class="dimsum-background" light>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title>DimSum</v-toolbar-title>
    </v-toolbar>

    <div class="content">
      <router-view></router-view>
    </div>

    <v-card>
      <v-bottom-nav absolute value="true" class="grey lighten-4 elevation-8 bottom-fixed">

        <router-link to="/">
          <v-btn flat dark class="teal--text">
            <span>Problems</span>
            <img src="./assets/icon-problem.svg">
          </v-btn>
        </router-link>

        <router-link to="/truths">
          <v-btn flat dark class="teal--text">
            <span>Truths</span>
            <v-icon>favorite</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/form">
          <v-btn outline large icon class="indigo--text">
            <v-icon>edit</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/concepts">
          <v-btn flat dark class="teal--text">
            <span>Concepts</span>
            <v-icon>place</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/collabs">
          <v-btn flat dark class="teal--text">
            <span>Collaborators</span>
            <v-icon>place</v-icon>
          </v-btn>
        </router-link>

      </v-bottom-nav>

      </v-bottom-nav>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import './stylus/main'
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons')

  body {
    background-color: #E1E2E1;
  }

  h4 {
    margin-bottom: 0px;
  }
  h6 {
    color: #F58029;
    margin-bottom: 0px;
  }

  .dimsum-background {
    background-image: url("./assets/dimSumNav.png");
    background-position: center right;
    background-size: 100%;
  }

  .cardsWrapper {
    width: 95%;
    margin: 24px auto;
  }

  .card {
    margin-bottom: 8px;
  }

  .bottom-fixed {
    position:fixed;
  }
</style>
