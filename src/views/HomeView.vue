<!-- eslint-disable max-len -->
<template>
  <v-content >
      <br />
      <br />
      <br />
      <br />
      <SideBarComponent />
      <HeroComponent />
      <CardsComponent />
      <HomeAboutUs />
      <HomeProjects />
      <HomeServices />
      <HomeBudget />
  </v-content>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HeroComponent from '../components/HeroComponent.vue';
import CardsComponent from '../components/CardsComponent.vue';
import HomeAboutUs from '../components/HomeAboutUs.vue';
import HomeProjects from '../components/HomeProjects.vue';
import HomeServices from '../components/HomeServices.vue';
import HomeBudget from '../components/HomeBudget.vue';
import SideBarComponent from '../components/SideBarComponent.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    HeroComponent,
    CardsComponent,
    HomeAboutUs,
    HomeProjects,
    HomeServices,
    HomeBudget,
    SideBarComponent,
},
});
</script>

<style src="@/css/HomeView.css" lang="css" scoped></style>
