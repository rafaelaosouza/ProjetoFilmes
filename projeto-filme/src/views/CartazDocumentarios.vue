<template>
  <v-container>
    <h1 class="text-h5 text-center mb-3 mt-5">Documentários em Cartaz</h1>
    <ListaDocumentariosCartaz :filmes="ListaDocumentariosCartaz"/>
  </v-container>
</template>

<script>
import ListaDocumentariosCartaz from '../components/ListaDocumentariosCartaz';

export default {
  name: 'CartazDocumentarios',
  components: {
    ListaDocumentariosCartaz
  },
  data() {
    return {
      listaDocumentariosCartaz: []
    }
  },
  created() {
    fetch('https://sistweb.com.br')
      .then(response => response.json())
      .then(json => {
        this.listaDocumentariosCartaz = json;
      })
  }
}
</script>
