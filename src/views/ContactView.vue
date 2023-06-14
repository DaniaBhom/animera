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
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nome" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-textarea v-model="message" :rules="messageRules" label="Mensagem" required></v-textarea>
          <v-btn :disabled="!valid" color="#00838f" class="mr-4" @click="validate"><b>Submit</b></v-btn>
          <v-btn color="#00838f" class="mr-4" @click="reset"><b>Reset</b></v-btn>
        </v-form>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Teams</h2>

      </v-container>
    </div>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'ContactView',

  components: {},
});
</script>

<style src="@/css/ContactView.css" lang="css" scoped></style>
