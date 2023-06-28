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
          <b>
            A Animera Soluções Digitais é uma empresa voltada à Criação e
            Desenvolvimento de Websites, E-Commerce, Aplicações Web, Aplicativos
            Mobile e SEO(Search Engine Optimization), customizados de acordo com
            a sua necessidade.
          </b>
        </p>
        <p class="block">
          <b>
            A empresa foi criada em 2020, por Daniela Bohm, que atua na área de
            TI há mais de vinte anos, como professora de TI, Designer Gráfico,
            Web Designer e Desenvolvedora FullStack.
          </b>
        </p>
        <p class="block">
          <b>
            Utilizamos as melhores tecnologias do mercado no desenvolvimento
            FrontEnd e BackEnd, como Angular, Ionic, VueJs, React, PostGreSQL,
            MongoDB, Phyton e Java. Garantimos assim a máxima eficiência e
            velocidade no carregamento de seus sistemas.
          </b>
        </p>

        <p class="block">
          <b
            ><a href="../contact">Clique aqui</a> para entrar em contato e saber
            sobre como podemos ajudar o seu negócio.
          </b>
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
