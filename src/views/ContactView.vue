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
    <div>
      <v-container>
        <H5 class="block d-flex d-sm-flex d-lg-none"> Contato </H5>
        <div class="block">
          <p>
            <b>
              Entre em contato para dúvidas, sugestões ou orçamento. Teremos
              prazer em atendê-lo. Aguarde nosso retorno!
            </b>
          </p>
        </div>
      </v-container>
    </div>
    <v-container class="form">
      <Message v-show="msg" :msg="msg" />
      <div>
        <form
          id="contact"
          action="https://formsubmit.co/db.animera@gmail.com"
          method="POST"
          @submit="contactanimera"
        >
          <input
            type="hidden"
            name="_next"
            value="https://animera.netlify.app/contactsucess"
          />
          <div class="input-container">
            <label for="name">Nome:</label>
            <input id="name" v-model="name" type="text" name="name" />
          </div>
          <div class="input-container">
            <label for="email">E-mail:</label>
            <input id="email" v-model="email" type="email" name="email" />
          </div>
          <div class="input-container">
            <label for="cel">Celular:</label>
            <input id="cel" v-model="cel" type="text" name="cel" />
          </div>
          <div class="input-container">
            <label for="whatsapp">Assunto:</label>
            <input id="subject" v-model="subject" type="text" name="subject" />
          </div>
          <div class="input-container">
            <label for="mensagem">Mensagem:</label>
            <textarea id="message" v-model="message" name="message"></textarea>
          </div>
          <div class="input-container">
            <input class="submit-btn" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'ContactView',
});
</script>

<style src="../css/ContactView.css" lang="css" scoped></style>
