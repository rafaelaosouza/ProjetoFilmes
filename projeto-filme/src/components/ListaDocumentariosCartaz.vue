<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Documentários</th>
          <th class="text-right">Duração</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(documentario, index) of ListaDocumentarioCartaz" :key="documentario.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="26">
              <img :src="documentario.cartaz" :alt="documentario.nome"/>
            </v-avatar>
            <span class="pl-2">{{ documentario.nome }}</span>
          </td>
          <td class="text-right">{{ documentario.duracao }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ListaDocumentarioCartaz',
  props: {
    filmes: {
      type: Array,
      required: true
    }
  }
}
</script>