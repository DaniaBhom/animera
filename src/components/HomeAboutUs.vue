<!-- eslint-disable max-len -->
<template>
  <div class="d-none d-sm-none d-md-flex d-lg-flex">
    <v-container fluid class="container_lg">
      <br/>
      <v-card flat class="container_lg">
        <v-card-text>
          <table style="width: 100%" border="0px solid white">
            <tr style="height: 50px" align="left">
              <th rowspan="3" style="width: 800px">
                <v-card class="mt-0">
                  <v-img
                    class="img1"
                    src="../assets/imagesAnimera/about/About_1.jpg"
                  />
                </v-card>
              </th>
              <th style="width: 600px">
                <H1 class="title1">
                  <b>Sobre</b>
                </H1>
              </th>
            </tr>

            <tr style="height: 40px" align="left">
              <td>
                <v-card variant="outlined" class="fundobranco" max-width="500">
                  <v-card-text flat class="description1">
                      <p>
                        A Animera Soluções Digitais é uma empresa de criação de
                        sites profissionais, aplicações web e aplicativos. Nós
                        projetamos, desenvolvemos e gerenciamos sites de alto
                        impacto que geram leads, vendem produtos e contam
                        histórias.
                      </p>

                      <p>
                        Seguindo uma abordagem personalizada, pretendemos
                        entregar produtos especialmente criados para a sua
                        marca, com design moderno e com as melhores tecnologias.
                      </p>
                    
                  </v-card-text>
                </v-card>
              </td>
            </tr>

            <tr style="height: 50px" align="left">
              <td>
                <router-link to="/about">
                  <v-btn class="button1">
                    <b> Saiba Mais </b>
                  </v-btn>
                </router-link>
              </td>
            </tr>
          </table>
        </v-card-text>
      </v-card>
      <br />
    </v-container>
  </div>
  <div class="d-flex d-sm-flex d-md-none d-lg-none">
    <v-container fluid class="container_lg">
      <br />
      <v-card class="container_xs">
        <table style="width: 100%" border="0px solid white">
          <tr align="center">
            <th rowspan="1" style="width: 100%">
              <v-img
                class="img1"
                src="../assets/imagesAnimera/about/About_1.jpg"
              />
            </th>
          </tr>
          <tr>
            <td style="width: 100%">
              <H1 class="title_xs">
                <b>Sobre</b>
              </H1>
            </td>
          </tr>
          <tr>
            <td class="description_xs" style="width: 100%">
           
              <p>
                A Animera Soluções Digitais é uma empresa de criação de
                sites profissionais, aplicações web e aplicativos. Nós
                projetamos, desenvolvemos e gerenciamos sites de alto
                impacto que geram leads, vendem produtos e contam
                histórias.
              </p>

              <p>
                Seguindo uma abordagem personalizada, pretendemos
                entregar produtos especialmente criados para a sua
                marca, com design moderno e com as melhores tecnologias.
              </p>
        
            </td>
          </tr>
          <tr align="center">
            <td>
              <router-link to="/about">
                <v-btn class="button_xs">
                  <b> Saiba Mais </b>
                </v-btn>
              </router-link>
            </td>
          </tr>
        </table>
        <br />
      </v-card>
      <br />
    </v-container>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeAboutUs',

  data() {
    return {};
  },
};
</script>

<style src="@/css/HomeAboutUs.css" lang="css" scoped></style>
