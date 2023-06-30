<!-- eslint-disable global-require -->
<template >
  <div >
    <v-container fluid class="backgroundservices">
      <div >
        <v-container class="title3">
          <br />
          <H1>
            <b>Nossos Serviços</b>
          </H1>
          <br />
          <v-row>
            <v-col
            
              v-for="item in items"
              :key="item.id"
              class="mx-auto"
              cols="12"
              md="4"
              sm="6"
              xs="8"
              
              >
              <v-card class="vcard" elevation="8">
                <v-img class="imageservices" :src="item.src" />

                <v-card-title class="vcardtitle">
                  <div>{{ item.title }}</div>
                </v-card-title>

                <v-card-text class="description">
                  <div>
                    <p>
                     
                        {{ item.description }}
                      
                    </p>
                  </div>
                </v-card-text>

                <v-card-actions class="alignbutton">
                  <router-link to="/services">
                    <v-btn
                     class="buttoncard"
                     variant="text">
                      <b>Saiba Mais >></b>
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
   
        </v-container>
      </div>
    
    </v-container>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeServices',

  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Landing Pages',
          subtitle: 'Subtitulo 6',
          description:
            'LPs são páginas de vendas criadas especialmente para campanhas de marketing. Também podem ser utilizadas para um site institucional mais enxuto, com uma única pagina.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/landingpage.jpg'),
        },
        {
          id: 2,
          title: 'Sites Institucionais',
          subtitle: 'Subtitulo 5',
          description:
            'Este modelo de site, é a apresentação da sua empresa, dos seus produtos ou serviços. Atua como vitrine do seu negócio na web, conectando sua empresa a seu público.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/siteinstitucional.jpg'),
        },
        {
          id: 3,
          title: 'E-Commerce',
          subtitle: 'Subtitulo 4',
          description:
            'No mundo globalizado as vantagens do comércio eletrônico são enormes. Você terá uma loja 24hrs e poderá realizar vendas em qualquer horário do dia para clientes de qualquer lugar do mundo.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/Ecommerce2.jpg'),
        },
        {
          id: 4,
          title: 'Sistemas Web',
          subtitle: 'Subtitulo 1',
          description:
            'Utilizando as principais tecnologias do mercado, com ferramentas profissionais e otimizadas, criamos Sistemas Web de alto desempenho,con responsividade e SEO para todos os negócios.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/sistemasweb2.jpg'),
        },
        {
          id: 5,
          title: 'APPs Mobile',
          subtitle: 'Subtitulo 3',
          description:
            'Criação de aplicativos móveis com design moderno e funcionalidades de acordo com a necessidade da sua empresa. Se você já tem um projeto de App em mente, vamos tirá-lo do papel?',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/Apps.jpg'),
        },
        {
          id: 6,
          title: 'SEO (Search Engine Optimization)',
          subtitle: 'Subtitulo 2',
          description:
            'Quase mais importante que o próprio site, é que ele seja encontrado nos principais motores de busca. Entregamos o seu site já otimizado, para que ele esteja à frente do mercado.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/SEO2.jpg'),
        },
      ],
    };
  },
};
</script>

<style src="@/css/HomeServices.css" lang="css" scoped></style>
