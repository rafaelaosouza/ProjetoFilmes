<template>
  <v-container>
    <h1 class="text-h5 text-center mb-3 mt-5">Filmes em Cartaz</h1>
    <ListaCartaz :filmes="ListaCartaz"/>
  </v-container>
</template>

<script>
import ListaCartaz from '../components/ListaCartaz';

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
    fetch('https://sistweb.com.br')
      .then(response => response.json())
      .then(json => {
        this.listaCartaz = json;
      })
  }
}
</script>
