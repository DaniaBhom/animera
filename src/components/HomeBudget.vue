<!-- eslint-disable global-require -->
<template>
 <div class="d-none d-sm-flex">
    <v-container fluid class="container_lg">
      <br /><br />
      <v-card flat class="fundocard">
        <v-card-text>
          <table style="width: 100%" border="0px solid white">
            <tr style="height: 50px" align="left">
              <th rowspan="3" style="width: 800px">
                <v-card class="mt-0">
                  <v-img class="img1" src="../assets/imagesAnimera/budget/budget.jpg" />
                </v-card>
              </th>
              <th style="width: 600px">
                <div>
                  <H1 class="title4">
                    <b>Orçamento</b>
                  </H1>
                </div>
              </th>
            </tr>

            <tr style="height: 40px" align="left">
              <td>
                <v-card variant="outlined" class="fundocard" max-width="500">
                  <v-card-text flat class="description4">
                    <b>
                      <p>
                        Temos diversos planos que atendem projetos essenciais e avançados. Mas também olhamos para a necessidade particular da sua empresa.
                      </p>
                      
                      <p>
                        Caso tenha necessidades extras, como criação de logo ou identidade visual, e tráfego pago, oferecemos estes serviços separadamente. Entre em contato para fazer um orçamento personalizado.
                      </p>
                    </b>
                  </v-card-text>
                </v-card>
              </td>
            </tr>

            <tr style="height: 50px" align="left">
              <td>
                <a href="/budget">
                <v-btn class="button1">
                  <b> Saiba Mais </b>
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
  <div class="d-flex d-sm-none">
    <v-container fluid class="container_lg">
      <br />
      <v-card class="container_xs">
        <table style="width: 100%" border="0px solid white">
          <tr align="center">
            <th rowspan="1" style="width: 800px">
              <v-img
                class="img1"
                src="../assets/imagesAnimera/projects/projects.jpg"
              />
            </th>
          </tr>
          <tr>
            <td style="width: 800px">
              <H1 class="title_xs">
                <b>Orçamento</b>
              </H1>
            </td>
          </tr>
          <tr>
            <td class="description_xs" style="width: 800px">
              <b>
                <p>
                  Temos diversos planos que atendem projetos essenciais e avançados. Mas também olhamos para a necessidade particular da sua empresa.
                </p>
               <br/> 
                <p>
                  Caso tenha necessidades extras, como criação de logo ou identidade visual, e tráfego pago, oferecemos estes serviços separadamente. Entre em contato para fazer um orçamento personalizado.
                </p>
              </b>
            </td>
          </tr>
          <tr align="center">
            <td>
              <a href="../projects">
                <v-btn class="button_xs">
                  <b> Saiba Mais </b>
                </v-btn>
              </a>
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
  name: 'HomeBudget',

  data() {
    return {
      
    };
  },
};
</script>

<style src="@/css/HomeBudget.css" lang="css" scoped></style>
