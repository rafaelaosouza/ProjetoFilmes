<template>
  <v-container class="comprar-ingresso">
    <v-card
    class="mx-auto"
    max-width="80%"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
       <h2 class="text-h5">
      Nome do filme
      </h2>
      <v-spacer></v-spacer>
      <span class="text-h7">R$30.00</span>
    </v-card-title>

    <v-card-subtitle>
      Duração
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Escolher seção
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <span class="subheading">Dia</span>
          <v-select :items="dias" label="Escolha o dia" solo></v-select>

          <span class="subheading">Horário</span>
          <v-select :items="horarios" label="Escolha o horário" solo></v-select>

        </v-card-text>
          
        <router-link to="/Quantidade">
          <v-card-actions >
            <v-btn block  class="white--text botao" color="orange lighten-2">
                  Reservar
            </v-btn>
          </v-card-actions>
        </router-link>
      </div>
    </v-expand-transition>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ComprarIngressos',
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