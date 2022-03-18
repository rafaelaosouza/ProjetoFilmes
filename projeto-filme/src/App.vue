<template>
   <v-app>
      <h2>Filmes</h2>
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'
export default {
  name: 'App',
  components: {
    AppTopBar
  }
}
</script>

<style scoped>

.link-home {
  color: orange !important;
  text-decoration: none;
}
</style>