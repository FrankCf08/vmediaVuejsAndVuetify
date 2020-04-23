<template>
  <v-card>
    <v-app>
      <MainNav />
      <v-content>
        <HelloWorld />
      </v-content>
    </v-app>
  </v-card>
</template>

<script>
import MainNav from "./navBars/mainNavBar";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    MainNav,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
