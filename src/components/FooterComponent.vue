<!-- eslint-disable max-len -->
<template>
  <v-container fluid>
    <v-footer> 
      <v-spacer />
      <v-card flat tile class="bg-black white--text text-center" >
        <v-card-text class="white--text pt-0 d-none d-sm-flex">
          <table style="width: 100%" border="0px solid white">
            <tr style="height: 50px" align="left">
              <th rowspan="2" style="width: 900px">
                <v-card class="bg-black" max-width="900">
                  <v-img class="logo2" src="../assets/imagesAnimera/logo/logo_site2.png" />
                </v-card>
              </th>
              <th style="width: 500px" align="right">
                
              </th>
            </tr>
            <tr style="height: 50px" align="right">
              <td>
                <p class="font2">
                  <b>Contato</b>
                </p>
              </td>
            </tr>
            <tr style="height: 50px" align="left">
              <td rowspan="3">
                <v-card class="bg-black white--text text-justify" max-width="500px" >
                  
                    <p class="description">
                      A Animera Soluções Digitais é uma empresa de criação de sites profissionais, aplicações web e aplicativos. Nós projetamos, desenvolvemos e gerenciamos sites de alto impacto que geram leads, vendem produtos e contam histórias.
                    </p>
                  
                </v-card>
              </td>
              <td align="right">
                
              </td>
            </tr>
            <tr style="height: 50px" align="right">
              <td>
                <p class="font">
                  Av. Beira Mar, 2368 - Guarapari - ES
                  <br>
                  Tel: +55 27 99706-9915
                  <br>
                  Email: db.animera@gmail.com
                </p> 
              </td>
            </tr>
            <tr style="height: 50px" align="right">
              <td>
                <p class="font">
                  Siga-nos:
                    <v-btn
                      v-for="icon in icons"
                      :key="icon"
                      class="mx-4"
                      :icon="icon"
                      variant="text"
                      color="#84ffff"
                      >
                      <v-icon size="24px">
                        {{ icon }}
                      </v-icon>
                    </v-btn>
                </p>
              </td>
            </tr>
          </table>
        </v-card-text>
        <v-divider/>
        <v-card-text class="white--text d-none d-sm-flex ">
          <strong>Copyright©</strong> {{ new Date().getFullYear() }} —
          <strong>Animera Soluções Digitais</strong>
        </v-card-text>

        
        <v-card class="d-flex d-sm-none">
          <v-img 
          class="logo_xs"
          src="../assets/imagesAnimera/logo/logo_site2.png" />
        </v-card>
        <v-divider/>
        <v-card-text class="white--text d-flex d-sm-none">
          <strong>Copyright©</strong> {{ new Date().getFullYear() }} —
          <strong>Animera Soluções Digitais</strong>
        </v-card-text>
      
    </v-card>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Footer',
  data: () => ({
    icons: ['mdi-whatsapp', 'mdi-instagram'],
  }),
};
</script>

<style src="@/css/FooterComponent.css" lang="css" scoped></style>

