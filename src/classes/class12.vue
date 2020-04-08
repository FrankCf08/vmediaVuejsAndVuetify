<template>
  <div class="ml-2 mr-2">
    <div>
      <h1 v-if="winner"> The winner is "{{winner}}"</h1>
      <h2 v-else>Choosing random people:</h2>
    </div>
    <v-card 
      class="mx-auto"
      max-width="500"
     >
      <v-list>
        <v-list-item-group
          mandatory
          color="indigo">
          <v-list-item
            v-for="person in people"
            :key="person.id">
            <v-list-item-content>
              <v-list-item-title 
                v-text="person"
                class="text-center">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div 
      class="mt-4 mx-auto">
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="loader = 'loading'"
         >
        Choose Winner
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Class12",

  data() {
    return {
      people: [
        "Juan",
        "Carlos",
        "Raul",
        "Fernando",
        "Fiorella",
        "Gerardo",
        "Nicolas",
      ],
      winner:null,
      loader: null,
      loading: false,
    };
  },
  watch: {
      loader () {
        const that = this
        const l = that.loader
        that[l] = !that[l]
        setTimeout(()=>{
          that[l] = false,
          that.chooseRandomUser()
          }, 3000)
        that.loader = null
        this.winner = null
      },
  },
  methods:{
    chooseRandomUser(){
      let quantity = this.people.length-1
      let index = Math.floor(Math.random()*quantity)
      this.winner = this.people[index]
    }
  },
};
</script>
<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
