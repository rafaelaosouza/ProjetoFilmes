<template>
  <v-container>
    <h1 class="text-h5 text-center mb-3 mt-5">Séries em Cartaz</h1>
    <ListaSeriesCartaz :filmes="ListaSeriesCartaz"/>
  </v-container>
</template>

<script>
import ListaSeriesCartaz from '../components/ListaSeriesCartaz';

export default {
  name: 'CartazSeries',
  components: {
    ListaSeriesCartaz
  },
  data() {
    return {
      listaSeriesCartaz: []
    }
  },
  created() {
    fetch('https://sistweb.com.br')
      .then(response => response.json())
      .then(json => {
        this.listaCartaz = json;
      })
  }
}
</script>
