<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Filmes</th>
          <th class="text-right">Duração</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(filme, index) of clubes" :key="filme.id">
          <td>{{ index + 1 }}</td>
          <td>
            <v-avatar size="24">
              <img :src="filme.cartaz" :alt="filme.nome"/>
            </v-avatar>
            <span class="pl-2">{{ filme.nome }}</span>
          </td>
          <td class="text-right">{{ filme.duracao }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
​
<script>
export default {
  name: 'ListaCartaz',
  props: {
    filmes: {
      type: Array,
      required: true
    }
  }
}
</script>