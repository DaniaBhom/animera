<!-- eslint-disable max-len -->
<template>
  <v-content>
      <br />
      <br />
      <br />
      <br />
      <HeroComponent />
      <CardsComponent />
      <HomeAboutUs />
      <HomeProjects />
      <HomeOurSolutions />
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
import HomeOurSolutions from '../components/HomeOurSolutions.vue';
import HomeBudget from '../components/HomeBudget.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    HeroComponent,
    CardsComponent,
    HomeAboutUs,
    HomeProjects,
    HomeOurSolutions,
    HomeBudget,
},
});
</script>

<style src="@/css/HomeView.css" lang="css" scoped></style>
