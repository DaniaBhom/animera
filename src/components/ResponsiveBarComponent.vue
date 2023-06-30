<template>
  <div class="menu text-center">
    <v-menu
    transition="scale-transition"
  >
    <template #activator="{ props }">
      <v-btn
        color="#00FFFF"
        v-bind="props"
      >
        POR
      </v-btn>
    </template>
  </v-menu>
  <v-menu
  transition="scale-transition"
>
  <template #activator="{ props }">
    <v-btn
      color="#00FFFF"
      v-bind="props"
    >
      EN
    </v-btn>
  </template>

</v-menu>
    <v-menu
      transition="scale-transition"
    >
      <template #activator="{ props }">
        <v-btn
          color="#00FFFF"
          v-bind="props"
        >
          Menu
        </v-btn>
      </template>

      <v-list class="submenu">
        <v-list-item>
          <v-list-item-title>
            <v-btn>
              <router-link to="/">
                Home
              </router-link>
             </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn>
              <router-link to="/about">
                Sobre
              </router-link>
             </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn>
              <router-link to="/services">
                Serviços
              </router-link>
             </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn>
              <router-link to="/budget">
                Planos
              </router-link>
             </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn>
              <router-link to="/projects">
                Projetos
              </router-link>
             </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn>
              <router-link to="/contact">
                Contato
              </router-link>
             </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

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

