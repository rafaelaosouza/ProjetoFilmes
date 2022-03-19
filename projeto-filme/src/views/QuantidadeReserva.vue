<template>
  <v-container class="quantidade-reserva">
  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Nome do filme
        </v-list-item-title>
        <v-list-item-subtitle>Dia: Horário:</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-content >
        <v-list-item-title class="text-h5 mb-1 pl-15">
          Valor:
        </v-list-item-title>
        <v-list-item-subtitle class="pl-15">R$ {{valor}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions >
      <v-btn class="mx-auto"
        outlined
        rounded
        text
        @click="subtrair()"
      >
        -
      </v-btn>
      <span>{{quantidade}}</span>
      <v-btn class="mx-auto"
        outlined
        rounded
        text
        @click="adicionar()"
      >
        +
      </v-btn>
    </v-card-actions>
        <router-link style="text-decoration: none" to="/Reserva">
        <v-btn block class="white--text" color="orange lighten-2">
                Finalizar
        </v-btn>
        </router-link>  
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'QuantidadeReserve',
  data(){
    return {
      show: false,
      dias: [
        'Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',
      ],
      horarios: [
        '09:00','12:00', '15:00', '18:00', '21:00', '23:00',
      ],
      quantidade: 1,
      valor: 30,
    }
  },
   methods: {
      adicionar(){
          this.quantidade = this.quantidade+1;
          this.valor = this.quantidade*30;
      },
      subtrair(){
        if(this.valor > 1){
          this.quantidade = this.quantidade-1;
          this.valor = this.quantidade*30;
        }
      },
    }
}
</script>

<style scoped>
.home-image {
  border-radius: 3px;
}
</style>