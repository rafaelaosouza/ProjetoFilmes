<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Séries</th>
          <th class="text-right">Duração</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(serie, index) of ListaSerieCartaz" :key="serie.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="26">
              <img :src="serie.cartaz" :alt="serie.nome"/>
            </v-avatar>
            <span class="pl-2">{{ serie.nome }}</span>
          </td>
          <td class="text-right">{{ serie.duracao }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ListaSerieCartaz',
  props: {
    filmes: {
      type: Array,
      required: true
    }
  }
}
</script>