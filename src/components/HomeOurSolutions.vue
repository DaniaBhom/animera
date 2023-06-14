<!-- eslint-disable global-require -->
<template>
  <div class="backgroundsolution">
  <v-container >
    
    <div class="homeoursolution">
      <v-container class="title3">
        <br />
        <H3>
          <b>Nossas Soluções</b>
        </H3>
        <br />
        <v-row>
          <v-col v-for="item in items" :key="item.id" cols="4">
            <v-card class="mx-auto" elevation="8">
              <v-img height="250px" :src="item.src" />
              <v-card-title class="vcardtitle">
                <div>{{ item.title }}</div>
              </v-card-title>
              <v-card-text class="description">
                <div>
                  <p><b>
                    {{ item.description }}
                  </b></p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <br />
        <v-card-actions align="center">
          <a href="/services">
          <v-btn color="#84FFFF" text>
            <H2><b>Saiba Mais ></b></H2>
          </v-btn>
          </a>
        </v-card-actions>
      </v-container>
    </div>
  <br/>
  <br/>
  </v-container>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeOurSolutions',

  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Landing Pages',
          subtitle: 'Subtitulo 6',
          description:
            'Páginas de vendas criadas especialmente para campanhas de marketing. Também podem ser utilizadas para um site institucional mais enxuto, com uma única pagina.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/landingpage.jpg'),
        },
        {
          id: 2,
          title: 'Sites Institucionais',
          subtitle: 'Subtitulo 5',
          description:
            'Este modelo de site é o mais utilizado, que representa a sua empresa, os seus produtos e serviços. Atua como vitrine do seu negócio na web, conectando sua empresa a seu público.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/siteinstitucional.jpg'),
        },
        {
          id: 3,
          title: 'E-Commerce',
          subtitle: 'Subtitulo 4',
          description:
            'As vantagens do comércio eletrônico são enormes. Você terá uma loja 24hrs e poderá realizar vendas em qualquer horário do dia para clientes de qualquer lugar do mundo.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/Ecommerce2.jpg'),
        },
        {
          id: 4,
          title: 'Sistemas Web',
          subtitle: 'Subtitulo 1',
          description:
            'Utilizando as principais tecnologias do mercado, como a SPA (Single Page Application) criamos Sistemas Web de alto desempenho, para todos os negócios.',
          // eslint-disable-next-line global-require
          src: require('../assets/imagesAnimera/solutions/sistemasweb2.jpg'),
        },
        {
          id: 5,
          title: 'APPs Mobile',
          subtitle: 'Subtitulo 3',
          description:
            'Criação de aplicativos móveis com design moderno e funcionalidades de acordo com a necessidade da sua empresa. Traga a sua ideia de App e nós executamos.',
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

<style src="@/css/HomeOurSolutions.css" lang="css" scoped></style>
