<template>
  <v-content>
    <div>
      <v-img src="../assets/imagesAnimera/hero_/hero_1.jpg">
        <v-row align="end" class="lightbox pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline d-none d-md-flex"><b>Projetos</b></div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div>
      <v-container>
        <div>
          <H5 class="block d-flex d-sm-flex d-lg-none"> Projetos </H5>
          <p class="block">
            Podemos desenvolver seu projeto do zero, desde o planejamento,
            mockup figma, arte visual, copywriter, execução, publicação e
            divulgação.
          </p>
          <p class="block">Confira abaixo nossos últimos projetos:</p>
        </div>

        <v-sheet
          elevation="12"
          max-width="1100"
          rounded="lg"
          width="100%"
          class="pa-4 text-left mx-auto"
          color="white"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6">
                <v-img
                  class="img2 pt-12"
                  src="../assets/imagesAnimera/projects/CapaJediLP.jpg"
                />
              </v-col>

              <v-col cols="12" md="5">
                <H5 class="ml-6">Cliente:</H5>
                <p class="ml-15"><b>Jedi Copywriter</b></p>
                <br />
                <H5 class="ml-6">Produto:</H5>
                <p class="ml-15 text-h6">
                  Criação de Arte Visual para Capa, Mockup e Landing Page para
                  venda de Ebook para Copywriters.
                </p>
                <br />
                <H5 class="ml-6"> Tecnologias: </H5>
                <ul class="ml-15 text-h6">
                  <li>Adobe Photoshop</li>
                  <li>HTML5, CSS, JavaScript, VueJS</li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <br />

        <v-sheet
          elevation="12"
          max-width="1100"
          rounded="lg"
          width="100%"
          class="pa-8 text-left mx-auto"
          color="white"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6">
                <v-img
                  class="img2 pt-12"
                  src="../assets/imagesAnimera/projects/CapaJaguar.jpg"
                />
              </v-col>

              <v-col cols="12" md="5">
                <H5 class="ml-6">Cliente:</H5>
                <p class="ml-15"><b>Jedi Copywriter</b></p>
                <br />
                <H5 class="ml-6">Produto:</H5>
                <p class="ml-15 text-h6">
                  Criação de Arte Visual para Capa, Mockup e Landing Page para
                  venda de Ebook para Copywriters.
                </p>
                <br />
                <H5 class="ml-6"> Tecnologias: </H5>
                <ul class="ml-15 text-h6">
                  <li>Adobe Photoshop</li>
                  <li>HTML5, CSS, JavaScript, VueJS</li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <br />

        <v-sheet
          elevation="12"
          max-width="1100"
          rounded="lg"
          width="100%"
          class="pa-4 text-left mx-auto"
          color="white"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6">
                <v-img
                  class="img2 pt-12"
                  src="../assets/imagesAnimera/projects/CapaCamilaFleck.jpg"
                />
              </v-col>

              <v-col cols="12" md="5">
                <H5 class="ml-6">Cliente:</H5>
                <p class="ml-15"><b>Jedi Copywriter</b></p>
                <br />
                <H5 class="ml-6">Produto:</H5>
                <p class="ml-15 text-h6">
                  Criação de Arte Visual para Capa, Mockup e Landing Page para
                  venda de Ebook para Copywriters.
                </p>
                <br />
                <H5 class="ml-6"> Tecnologias: </H5>
                <ul class="ml-15 text-h6">
                  <li>Adobe Photoshop</li>
                  <li>HTML5, CSS, JavaScript, VueJS</li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
        <br />

        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="2"
            rounded="circle"
          ></v-pagination>
        </div>

        <br />
      </v-container>
    </div>
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components

export default defineComponent({
  name: 'ProjectsView',

  data: () => ({
    return: {
      page: 1,
    },
  }),
});
</script>

<style src="@/css/ProjectsView.css" lang="css" scoped></style>
