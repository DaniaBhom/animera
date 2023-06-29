<template>
  <div class="bar">
<v-toolbar class="menu d-flex d-sm-none">
  <v-toolbar-items>
    <v-btn color="#00FFFF">
      <router-link to="/">
        <H5 style="color: #00ffff">Home</H5>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/about">
        <H5>Sobre</H5>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/services">
        <H5>Serviços</H5>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/budget">
        <H5>Planos</H5>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/projects">
        <H5>Projetos</H5>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/contact">
        <H5>Contato</H5>
      </router-link>
    </v-btn>
  </v-toolbar-items>
</v-toolbar>
</div>
</template>
<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ResponsiveBarComponent',
    data: () => ({
      
    }),
  };
  </script>
  
  <style src="@/css/ResponsiveBarComponent.css" lang="css" scoped></style>

