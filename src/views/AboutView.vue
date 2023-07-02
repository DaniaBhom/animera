<!-- eslint-disable global-require -->
<template>
  <v-content>
    <div>
      <v-img src="../assets/imagesAnimera/hero_/hero_1.jpg">
        <v-row align="end" class="lightbox pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline d-none d-md-flex"><b>Sobre</b></div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div>
      <v-container>
        <H5 class="block d-flex d-sm-flex d-lg-none"> Sobre </H5>
        <p class="block">
          A Animera Soluções Digitais é uma empresa voltada à Criação e
          Desenvolvimento de Websites, E-Commerce, Aplicações Web, Aplicativos
          Mobile e SEO(Search Engine Optimization), customizados de acordo com a
          sua necessidade.
        </p>
        <p class="block">
          A empresa foi criada em 2020, por Daniela Bohm, que atua na área de TI
          há mais de vinte anos, como professora de TI, Designer Gráfico, Web
          Designer e Desenvolvedora FullStack.
        </p>
        <p class="block">
          Utilizamos as melhores tecnologias do mercado no desenvolvimento
          FrontEnd e BackEnd, como Angular, Ionic, VueJs, React, PostGreSQL,
          MongoDB, Phyton e Java. Garantimos assim a máxima eficiência e
          velocidade no carregamento de seus sistemas.
        </p>

        <p class="block">
          <router-link to="/contact">Clique aqui</router-link> para entrar em
          contato e saber sobre como podemos ajudar o seu negócio.
        </p>
      </v-container>
    </div>
    <div class="block"></div>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components
export default defineComponent({
  name: 'AboutView',

  data() {
    return {
      items: [],
    };
  },
});
</script>

<style src="@/css/AboutView.css" lang="css" scoped></style>
