<template>
<div class="d-flex d-sm-none">
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
    
      v-model="value"
      
      heigth="200px"
      mode="shift"
    >
      <v-btn width="150px" >
        <v-icon color="#00FFFF">mdi-book</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn width="150px" >
        <v-icon color="#00FFFF">mdi-book</v-icon>

        <span>About</span>
      </v-btn>

      <v-btn width="150px" >
        <v-icon color="#00FFFF">mdi-book</v-icon>

        <span>Services</span>
      </v-btn>

      <v-btn width="150px" >
        <v-icon color="#00FFFF">mdi-book</v-icon>

        <span>Projects</span>
      </v-btn>
      <v-btn width="150px" >
        <v-icon color="#00FFFF">mdi-book</v-icon>

        <span>Budget</span>
      </v-btn>
      <v-btn width="150px" >
        <v-icon color="#00FFFF">mdi-book</v-icon>

        <span>Contact</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</div>
</template>


<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>
