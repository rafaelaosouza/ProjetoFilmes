<template>
  <v-container class="minha-reserva">
  <v-card elevation="2" shaped class="mx-auto" max-width="80%"> 
  <v-card-title>
       <h2 class="text-h5 mx-auto" >
      Nome do filme
      </h2>
    </v-card-title>

    <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Número da reserva: 5488526</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Quantidade de ingressos: 2</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Dados da seção:</v-list-item-title>
        <v-list-item-subtitle>Dia:</v-list-item-subtitle>
        <v-list-item-subtitle>Horário:</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Acentos</v-list-item-title>
        <v-list-item-subtitle>23</v-list-item-subtitle>
        <v-list-item-subtitle>24</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Valor</v-list-item-title>
        <v-list-item-subtitle>
          R$ 30.00
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          O valor deve ser pago no cinema. Basta apresentar esse voucher de reserva.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Sua reserva foi concluída! </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  

</v-card>
  </v-container>
</template>

<script>
export default {
  name: 'MinhaReserva',
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