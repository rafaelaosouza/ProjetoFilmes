<template>
  <v-container>
    <h1 class="text-h5 text-center mb-3 mt-5">Filmes em Cartaz</h1>
    <ListaFilmesCartaz :filmes="ListaFilmesCartaz"/>
  </v-container>
</template>

<script>
import ListaFilmesCartaz from '../components/ListaFilmesCartaz';

export default {
  name: 'CartazFilmes',
  components: {
    ListaFilmesCartaz
  },
  data() {
    return {
      listaFilmesCartaz: []
    }
  },
  created() {
    fetch('https://github.com/Loordbz/apifilmes/blob/master/APIFILMES/api.json')
      .then(response => response.json())
      .then(json => {
        this.listaFilmesCartaz = json;
      })
  },
  computed: {
    filmesOrdenados() {
      const computado = this.listaFilmesCartaz.slice(0).sort(
        (a, b) =>  a.pontos > b.pontos ? -1 : 1
      );
      return computado;
    }
  }
}
</script>
