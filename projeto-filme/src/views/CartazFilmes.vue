<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Filmes em Cartaz</h2>
    <ListaCartaz :filmes="ListaCartaz"/>
  </v-container>
</template>

<script>
import ListaCartazVue from './ListaCartaz.vue';

export default {
  name: 'CartazFilmes',
  components: {
    ListaCartaz
  },
  data() {
    return {
      listaCartaz: []
    }
  },
  created() {
    fetch('./components/api/filmes.json')
      .then(response => response.json())
      .then(json => {
        this.listaCartaz = json;
      })
  }
}
</script>
