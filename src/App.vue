<template >
  
  <v-app class="background">
    <v-app-bar class="headerbar">

      <HeaderComponent />
      
    </v-app-bar>


    <router-view />

    <v-footer>
      <FooterComponent />
    </v-footer>
  </v-app>
    <div class="whats">
    <a href="https://wa.me/5554996119977" target="_blank">
      <img src="whatsapp_transp.png" width="75" alt="Fale conosco pelo Whatsapp" title="Fale conosco pelo Whatsapp"/>
    </a>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,

    
  },
};
</script>

<style src="@/css/App.css" lang="css" scoped></style>
