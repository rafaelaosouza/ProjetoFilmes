<template>
  <div class="app-top-bar">
    <v-app-bar app color="orange" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      
      <v-toolbar-title>
        Projetos Filmes 🎥
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs"  small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>ON</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs" small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>OFF</span>
      </v-tooltip>  

    </v-app-bar>
    
  <v-spacer></v-spacer>

  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="orange--text text--lighten-2">

        <router-link to="/login">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Login
            </v-list-item-title>        
          </v-list-item>
        </router-link> 

        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Início
            </v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/Filmes"> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-movie</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Filmes
            </v-list-item-title>
          </v-list-item>
        </router-link> 

        <router-link to="/Series">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-movie</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Séries
            </v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/Documentarios">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-svg</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Documentários
            </v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/noticias">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-svg</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Noticias
            </v-list-item-title>
          </v-list-item>
        </router-link>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  methods: {
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>