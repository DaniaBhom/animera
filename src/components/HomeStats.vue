<!-- eslint-disable max-len -->
<template>
  <div class="fundopreto">
    <v-container fluid>
      <br /><br />
      <H1 class="home-title-white">
        <b>Nossos Números</b>
      </H1>
      <p class="home-title-white">____________</p>
      <br /><br />
      <v-row>
        <v-col cols="1" />
      </v-row>
      <div class="row">
        <div class="col-md-3 col-2 text-center">
          <span
            class="about-us-number numscroller numscroller-big-bottom roller-title-number-3 scrollzip isShown"
            data-slno="3"
            data-min="0"
            data-max="50"
            data-delay="3"
            data-increment="2"
            >50</span
          ><span class="about-us-number">+</span>
          <p class="about-us-achive">Clientes</p>
        </div>
        <div class="col-md-2 col-2 text-center">
          <span
            class="about-us-number numscroller numscroller-big-bottom roller-title-number-3 scrollzip isShown"
            data-slno="3"
            data-min="0"
            data-max="50"
            data-delay="3"
            data-increment="2"
            >150</span
          ><span class="about-us-number">+</span>
          <p class="about-us-achive">Projetos Criados</p>
        </div>
        <div class="col-md-2 col-2 text-center">
          <span
            class="about-us-number numscroller numscroller-big-bottom roller-title-number-3 scrollzip isShown"
            data-slno="3"
            data-min="0"
            data-max="50"
            data-delay="3"
            data-increment="2"
            >5000</span
          ><span class="about-us-number">+</span>
          <p class="about-us-achive">Horas de Trabalho</p>
        </div>
        <div class="col-md-2 col-2 text-center">
          <span
            class="about-us-number numscroller numscroller-big-bottom roller-title-number-3 scrollzip isShown"
            data-slno="3"
            data-min="0"
            data-max="50"
            data-delay="3"
            data-increment="2"
            >15</span
          ><span class="about-us-number">+</span>
          <p class="about-us-achive">Anos de Experiencia</p>
        </div>
        <div class="col-md-2 col-2 text-center">
          <span
            class="about-us-number numscroller numscroller-big-bottom roller-title-number-3 scrollzip isShown"
            data-slno="3"
            data-min="0"
            data-max="50"
            data-delay="3"
            data-increment="2"
            >50</span
          ><span class="about-us-number">+</span>
          <p class="about-us-achive">Happy Clients</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeStats',

  data() {
    return {};
  },
};
</script>

<style>
.home-title-white {
  color: #ffffff;
  text-align: center;
}

.about-us-number {
  color: #18ffff;
  display: inline-block;
  font-family: MavenPro-Regular;
  font-size: 50px;
  margin: 0;
  white-space: nowrap;
}

.about-us-achive {
  color: #18ffff;
  font-family: MavenPro-Regular;
  font-size: 20px;
}
</style>

<style lang="css" scoped>
body {
  margin: 0;
}
#stats {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
