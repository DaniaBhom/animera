<!-- eslint-disable max-len -->
<template>
  <div class="fundoverde">
    <v-container>
      <br /><br />
      <v-card flat class="fundocard">
        <v-card-text class="mt-auto">
          <table style="width: 100%" border="0px solid white">
            <tr style="height: 50px" align="left">
              <th style="width: 600px">
                <H1 class="title2">
                  <b>Projetos</b>
                </H1>
              </th>
              <th rowspan="3" style="width: 800px">
                <v-card class="mt-0">
                  <v-img  class="img2" src="../assets/imagesAnimera/projects/projects.jpg" />
                </v-card>
              </th>
            </tr>

            <tr style="height: 40px" align="left">
              <td>
                <v-card variant="outlined" class="fundocard" max-width="500">
                  <v-card-text flat class="description2">
                    <b>
                      <p>
                        A Animera é uma empresa recente, mas conta com experiência de desenvolvimento, de mais de vinte anos, no mercado de design, identidade visual e web design.
                      </p>
                      <br />
                      <p>
                        Conheça alguns dos projetos já desenvolvidos. E o que podemos fazer pelo seu negócio.
                      </p>
                      <br />
                    </b>
                  </v-card-text>
                </v-card>
              </td>
            </tr>

            <tr style="height: 50px" align="left">
              <td>
                <a href="../projects">
                  <v-btn class="button2">
                    <b> Saiba Mais ></b>
                  </v-btn>
                </a>
              </td>
            </tr>

          </table>
        </v-card-text>
      </v-card>
      <br /><br />
    </v-container>
  </div>
  <div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeProjects',

  data() {
    return {};
  },
};
</script>

<style src="@/css/HomeProjects.css" lang="css" scoped></style>
