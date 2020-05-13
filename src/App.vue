<template>
  <v-card>
    <v-app>
      <MainNav />
      <v-content>
       <transition name="fade" mode="out-in">
        <router-view />
       </transition>
      </v-content>
    </v-app>
  </v-card>
</template>

<script>
import axios from 'axios'
import MainNav from "./navBars/mainNavBar"
import { mapActions } from 'vuex'

export default {
  name: "App",

  components: {
    MainNav
  },

  data(){
    return{
      people:[],
      peopleURL: 'https://randomuser.me/api/?results=100'
    }
  },
  mounted(){
    this.getPeople()
  },
  methods:{
    ...mapActions(['setRandomPeople']),
    getPeople(){
      axios
        .request({
          method:'get',
          url: this.peopleURL,
        })
        .then( response => {
          this.people = response.data.results
          this.setRandomPeople(this.people)
        })
    }
  },
};
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
   transition: opacity 0.35s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
