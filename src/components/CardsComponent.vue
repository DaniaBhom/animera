<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="background">
      <v-container fluid>
        <div>
          <v-row>
            <v-card
              class="mx-auto"
              height="320px"
              width="260px"
              color="#1E1E1E"
             
            >
              <div>
                <v-icon color="purple-darken-3" x-large class="ml-3" dark>
                  mdi-shopping
                </v-icon>
                <h4 class="text-h5 ml-3 mt-2">
                  <b>Projetos Personalizados</b>
                </h4>

                <p class="text-h6 ml-3 mt-3">
                  Projetos personalizados para o seu negócio, com layout
                  exclusivo e intuitivo. Com as melhores técnicas UI/UX.
                </p>
              </div>
            </v-card>

            <v-card
              class="mx-auto"
              height="320px"
              width="260px"
              color="#84ffff"
            >
              <div id="project" class="first">
                <div>
                  <v-icon color="purple-darken-3 darken-2" x-large class="ml-3">
                    mdi-palette-swatch
                  </v-icon>
                  <h4 class="text-h5 text-black ml-3 mt-2">
                    <b>SEO (Search Engine Optimization)</b>
                  </h4>

                  <p class="text-h6 text-black ml-3 mt-3">
                    Oferecemos o serviço de otimização em buscadores de sites de
                    pesquisa, para que seu site apareça em rankings de busca.
                  </p>
                </div>
              </div>
            </v-card>

            <v-card
              class="mx-auto"
              height="320px"
              width="260px"
              color="#1E1E1E"
            >
              <div>
                <v-icon color="purple-darken-3" x-large class="ml-3" dark>
                  mdi-shopping
                </v-icon>
                <h4 class="text-h5 ml-3 mr-3 mt-2">
                  <b>Sites</b>
                </h4>
                <h4 class="text-h5 ml-3 mr-3 mt-2">
                  <b>Responsivos</b>
                </h4>
           
                <p class="text-h6 ml-3 mt-3">
                  Desenvolvemos sites que podem ser acessados de qualquer
                  dispositivo com toda a qualidade e velocidade.
                </p>
              </div>
            </v-card>

            <v-card
              class="mx-auto"
              height="320px"
              width="260px"
              color="#1E1E1E"
            >
              <div>
                <v-icon color="purple-darken-3" x-large class="ml-3">
                  mdi-book-open-page-variant
                </v-icon>
                <h4 class="text-h5 ml-3 mt-2">
                  <b>Assistência </b>
                </h4>
                <h4 class="text-h5 ml-3 mt-2">
                  <b>Técnica </b>
                </h4>
               
                <p class="text-h6 ml-3 mt-3">
                  Após a publicação oferecemos treinamento, atendimento a
                  dúvidas, atualização da página e manutenção.
                </p>
              </div>
            </v-card>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cards',

  data() {},
};
</script>

<style src="@/css/CardsComponent.css" lang="css" scoped></style>
