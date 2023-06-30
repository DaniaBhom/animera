<!-- eslint-disable global-require -->
<template>
  <div class="heroBlock">
    <v-carousel 
      :show-arrows="false"
      height="580"
      progress="#00acc1"
      disabled="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      >
        <v-row>
          <v-card
            class="card align-center justify-center flex-wrap text-center ma-10 ml-auto mr-auto pa-16*"
            background-color="black"
            elevation="4"
          >
            <div>
              <p class="title0">Conectando a sua empresa</p>
              
              <p class="title1">ao mundo digital!</p>
              <p class="title2 ">SPA (Single Page Applications)</p>
              <p class="title3">
                Conheça nossos serviços idealizados
                <br />
                especialmente para o seu negócio.
                <br />
              </p>
              <router-link to="/services">
                <v-btn x-large class="button1" color="purple-darken-3">
                  <b> Acesse Agora</b>
                </v-btn>
              </router-link>
            </div>

          </v-card>
        </v-row>

      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',

  data() {
    return {
      items: [
        {
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/hero/Hero1.jpg'),
        },
      ],
    };
  },
};
</script>

<style src="../css/HeroComponent.css" lang="css" scoped></style>
