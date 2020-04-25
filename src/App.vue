<template>
  <v-card>
    <v-app>
      <MainNav />
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </v-card>
</template>

<script>
import MainNav from "./navBars/mainNavBar";

export default {
  name: "App",

  components: {
    MainNav
  },

  data: () => ({
    //
  })
};
</script>
