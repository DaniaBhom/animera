<!-- eslint-disable global-require -->
<template>
  <v-content>
    <div>
      <v-img src="../assets/imagesAnimera/hero_/hero_1.jpg">
        <v-row align="end" class="lightbox pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline"><b>Sobre</b></div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div>
      <v-container>
        <p class="block">
          A Animera Soluções Digitais é uma empresa voltada à Criação e
          Desenvolvimento de Websites, E-Commerce, Aplicações Web, Aplicativos
          Mobile e SEO(Search Engine Optimization), customizados de acordo com a sua necessidade.
        </p>
        <p class="block">
          A empresa foi criada em 2020, por Daniela Bohm, que atua na área de TI
          há mais de vinte anos, como professora de TI, Designer Gráfico, Web
          Designer e Desenvolvedora FullStack.
        </p>
        <p class="block">
          Utilizamos as melhores tecnologias do mercado no desenvolvimento
          FrontEnd e BackEnd, como Angular, Ionic, Vue, React, PostGree, Mongo,
          Phyton e Java. Garantimos assim a máxima eficiência e velocidade no
          carregamento de seus sitemas.
        </p>
        <p class="block">
          Clique abaixo para saber sobre como podemos ajudar o seu negócio.
        </p>
        <v-btn
          class="button"
          variant="text"
        >
          <b>
            <a href="../contact">
              Contato >>
            </a>
          </b>
        </v-btn>
       </v-container>
    </div>
    <div class="block">

    </div>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components
export default defineComponent({
  name: 'AboutView',

  data() {
    return {
      items: [
      
      ],
    };
  },
});
</script>

<style src="@/css/AboutView.css" lang="css" scoped></style>
