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
      peopleURL: 'https://randomuser.me/api/?results=50'
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
