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
  // computed:{
  //   listaDocumentariosCartaz(){
  //   const listaDocumentariosCartaz = this.ListaDocumentariosCartaz.slice(0).sort((a,b) => a.id > b.id ? -1 :1)
  //   return listaDocumentariosCartaz
  //   }
  // }
  created() {
    fetch('https://sistweb.com.br')
      .then(res => res.json())
      .then((json) => {
        this.listaDocumentariosCartaz = json;
        console.log(this.listaDocumentariosCartaz)
        
      })
  }
}
</script>
