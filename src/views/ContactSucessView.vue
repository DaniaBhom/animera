<template>
    <v-content>
    
      <div>
        <v-img src="../assets/imagesAnimera/hero_/hero_2.jpg">
          <v-row align="end" class="lightbox pa-2 fill-height">
            <v-col>
              <v-container>
                <div class="headline"><b>Contato</b></div>
              </v-container>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <v-container>
      <div class="block">
        <br />
        <p>
          Seu email foi enviado com sucesso. Em breve retornamos seu contato!
        </p>
        <a href="index.html">Voltar</a>
        <br />
        <br />
        </v-container>
    </v-content>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
  export default defineComponent({
    name: 'ContactSucessView',
  
    components: {},
  });
  </script>
  
  <style src="../css/ContactView.css" lang="css" scoped></style>