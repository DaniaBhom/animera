<template>
  <v-container >
    <div>
      <v-toolbar class="navbar d-none d-sm-flex">
        <v-toolbar-title>
          <router-link to="/">
            <v-img
              class="logo"
              src="../assets/imagesAnimera/logo/logo_site.png"
            />
          </router-link>
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="icon1 d-none d-sm-flex " text> <v-icon>mdi-whatsapp</v-icon> +55 27 99706-9915 </v-btn>
        <v-btn class="icon2 d-none d-sm-flex" text> POR </v-btn>
        <v-btn class="icon3 d-none d-sm-flex" text> EN </v-btn>
<!--        <v-app-bar-nav-icon />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>-->
      </v-toolbar>
      <v-toolbar class="menu d-none d-sm-flex">
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn color="#00FFFF">
            <router-link to="/">
              <H3 style="color: #00ffff"><b>Home</b></H3>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/about">
              <H3><b>Sobre</b></H3>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/services">
              <H3><b>Serviços</b></H3>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/budget">
              <H3><b>Planos</b></H3>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/projects">
              <H3><b>Projetos</b></H3>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/contact">
              <H3><b>Contato</b></H3>
            </router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-toolbar class="navbar d-flex d-sm-none">
        <v-toolbar-title>
          <router-link to="/">
            <v-img
              class="mx-auto logo"
              src="../assets/imagesAnimera/logo/logo_site.png"
            />
          </router-link>
        </v-toolbar-title>
        
<!--        <v-app-bar-nav-icon />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>-->
      </v-toolbar>
      <v-toolbar color="black" class="d-flex d-sm-none">
              
        <v-spacer />
        <ResponsiveBarComponent />
      </v-toolbar>
    </div>

  </v-container>
</template>

<script>
import ResponsiveBarComponent from './ResponsiveBarComponent.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HeaderComponent',

  components: {
    ResponsiveBarComponent,
},

  data: () => ({
    
  }),
};
</script>

<style src="@/css/HeaderComponent.css" lang="css" scoped></style>
