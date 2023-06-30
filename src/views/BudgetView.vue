<template>
  <v-content>

    <div>
      <v-img src="../assets/imagesAnimera/hero_/hero_1.jpg">
        <v-row align="end" class="lightbox pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline"><b>Planos</b></div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
   
    <div>
      <v-container>
        <p class="block">
         
            Confira nossos planos abaixo. Temos a solução perfeita para o seu
            negócio. 
         
        </p>
        <p class="block">
          
            Após um briefing inicial realizado com o cliente, teremos condições de avaliar quais os serviços necessários e estipular um prazo de entrega assim como as condições do contrato. Oferecemos serviços complementares que sejam necessários para
            a criação do site, como Design Gráfico, Tratamento de Imagens, Copywriter, Dominio & Hospedagem, SEO, Manutenção Mensal (após a garantia de 6 meses)
            e outros.
          
        </p>
        <p class="block">
          <router-link to="/contact">Clique aqui</router-link> e entre em contato para saber
            mais sobre nossos serviços.
          
        </p>

        <br />
      </v-container>
    </div>
    <div class="fundopreto">
      <v-container>
        <H2>Lista de Preços</H2>
      </v-container>
    </div>
    <div class="pa-md-2 mx-lg-auto">
      <v-row class="d-flex justify-center align-stretch mb-6 bg-surface">
        <v-col v-for="item in items" :key="item.id" cols="12" md="2">
          <v-card outlined class="mx-auto">
            <v-img class="white--text align-end" height="600px" :src="item.src">
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </v-content>
</template>

<script>
import { defineComponent } from 'vue';


// Components

export default defineComponent({
  name: 'BudgetView',

 
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        // eslint-disable-next-line global-require
        src: require('../assets/imagesAnimera/budget/Pricelist1.png'),
      },
      {
        id: 2,
        // eslint-disable-next-line global-require
        src: require('../assets/imagesAnimera/budget/Pricelist2.png'),
      },
      {
        id: 3,

        // eslint-disable-next-line global-require
        src: require('../assets/imagesAnimera/budget/Pricelist3.png'),
      },
      {
        id: 4,

        // eslint-disable-next-line global-require
        src: require('../assets/imagesAnimera/budget/Pricelist4.png'),
      },
      {
        id: 5,

        // eslint-disable-next-line global-require
        src: require('../assets/imagesAnimera/budget/Pricelist5.png'),
      },
    ],
  }),
});
</script>

<style src="@/css/BudgetView.css" lang="css" scoped></style>
