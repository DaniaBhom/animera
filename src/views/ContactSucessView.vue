<template>
  <v-content>
    <div>
      <v-img src="../assets/imagesAnimera/hero_/hero_1.jpg">
        <v-row align="end" class="lightbox pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline d-none d-md-flex"><b>Contato</b></div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <v-container>
      <div class="block">
        <br />
        <p>
          <b>
            Seu email foi enviado com sucesso. Em breve retornamos seu contato!
          </b>
        </p>
        <a href="/">Voltar</a>
        <br />
        <br />
      </div>
    </v-container>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'ContactSucessView',
});
</script>

<style src="../css/ContactView.css" lang="css" scoped></style>
