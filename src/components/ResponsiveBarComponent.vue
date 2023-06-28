<template>
  <div class="bar">
<v-toolbar class="menu d-flex d-sm-none">
  <v-toolbar-items>
    <v-btn color="#00FFFF">
      <router-link to="/">
        <H2 style="color: #00ffff"><b>Home</b></H2>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/about">
        <H2><b>Sobre</b></H2>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/services">
        <H2><b>Serviços</b></H2>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/budget">
        <H2><b>Planos</b></H2>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/projects">
        <H2><b>Projetos</b></H2>
      </router-link>
    </v-btn>

    <v-btn color="#00FFFF">
      <router-link to="/contact">
        <H2><b>Contato</b></H2>
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

