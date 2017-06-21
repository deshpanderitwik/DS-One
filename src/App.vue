<template>
  <div class="wrapper">
    <v-toolbar class="orange" light>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title>DimSum</v-toolbar-title>
    </v-toolbar>

    <div class="content">
      <router-view></router-view>
    </div>
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
</style>
