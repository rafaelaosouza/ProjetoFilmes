<template>
  <div class="total">
    <div class="img">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <p class="texto">{{ item.name }}</p>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://trecobox.com.br/wp-content/uploads/2022/03/Spider-Man_No_Way_Home_Sem_Volta_Para_Casa_Homem_Aranha_3.webp',
            name: 'Homem Aranha: Sem volta pra casa', color: 'white',
          },
          {
            src: 'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2022/03/the_batman.jpg',
            name: 'Batman',
            
          },
          {
            src: 'https://rollingstone.uol.com.br/media/_versions/poster_de_encanto_nova_animacao_da_pixar_foto_divulgacao_disney_reproducao_twitter_widelg.jpg',
            name: 'Encantado',
          },
          {
            src: 'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2020/10/sem-saida.jpg',
            name: 'Sem Saída', 
          },
          {
            src: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/01/A-Era-do-Gelo-As-Aventuras-de-Buck-Disney-Plus-1024x576.jpg',
            name: 'A Era do Gelo: As Aventuras de Buck',
          }
        ],
      }
    },
  }
</script>

<style scoped>
.texto {
    font-size: 36px;
    text-align: center;
    justify-content: center;
    color: orange;
    display: flex;
    position: relative;
    margin-top: 51%;
    height: 100%;
    background: rgb(26, 25, 25);
}
</style>