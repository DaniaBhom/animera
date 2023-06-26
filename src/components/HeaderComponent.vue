<template>
  <v-container>
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
        <v-btn text> <v-icon>mdi-whatsapp</v-icon> +55 27 99706-9915 </v-btn>
        <v-btn text> POR </v-btn>
        <v-btn text> EN </v-btn>
        <v-app-bar-nav-icon />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
      <v-toolbar class="menu d-none d-sm-flex">
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn color="#00FFFF">
            <router-link to="/">
              <p style="color: #00ffff"><b>Home</b></p>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/about">
              <p><b>Sobre</b></p>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/services">
              <p><b>Serviços</b></p>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/budget">
              <p><b>Planos</b></p>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/projects">
              <p><b>Projetos</b></p>
            </router-link>
          </v-btn>

          <v-btn color="#00FFFF">
            <router-link to="/contact">
              <p><b>Contato</b></p>
            </router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <div>
      <v-toolbar class="navbar_xs d-flex d-sm-none">
        <v-toolbar-title>
          <router-link to="/">
            <v-img
              class="logo_xs"
              src="../assets/imagesAnimera/logo/logo_site.png"
            />
          </router-link>
        </v-toolbar-title>


      </v-toolbar>
    </div>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HeaderComponent',
  data: () => ({
    
  }),
};
</script>

<style src="@/css/HeaderComponent.css" lang="css" scoped></style>
