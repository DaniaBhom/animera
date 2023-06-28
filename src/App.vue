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
