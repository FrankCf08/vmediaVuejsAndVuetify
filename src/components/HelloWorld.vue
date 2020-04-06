<template>
  <div>
    <div v-show="visible" id="class1">
       <input type="text" v-model="message">
      <h1>{{message}}</h1>
      <h1 v-show="connected"> {{message}} connected</h1>
    </div>
    <div v-show="visible"  id="class2">
      <div v-if="age == 18">
        I am just eighteen
      </div>
      <div v-else-if="age< 18">
        YOu are under age
      </div>
      <div v-else>
        You are inmortal
      </div>
    </div>
    <div v-show="visible"  id="class3">
      <ul>
        <li 
         v-for="day in days"
         v-bind:key="day.id">{{day}}</li>
      </ul>
    </div>
    <div v-show="visible"  id="class4">
        List of duties:
      <ol>
        <li
          v-for="duty in duties"
          v-bind:key="duty.id"
          v-show="duty.priority == 'low'">
            {{duty.name}}
           <span class="font-weight-bold">{{duty.priority}}</span></li>
      </ol>
    </div>
    <div v-show="visible" id="class5">
      <ol>
        <li 
          v-for="duty in duties"
          v-bind:key="duty.id">
          {{duty.name}}
          <span 
            :class="[duty.priority == 'high'? 'blue--text' : 'red--text']"
            >{{duty.priority}}</span>
        </li>
      </ol>
      <div>
        <v-row>
          <v-col cols="12" md="6" sm="5">
            <v-text-field
              label="Enter new duty" 
              hide-details="auto"
              v-model="newDutyEntered"
              ></v-text-field>
          </v-col>
          <v-col cols="12" md="3" sm="5">
            <v-overflow-btn
              class="my-2"
              :items="priorityList"
              label="Priority List"
              v-model="priorityChoice"
            ></v-overflow-btn>
          </v-col>
          <v-col 
            cols="12" 
            md="3"
            sm="2"
            align="center"
            justify="center">
            <v-btn 
              fab dark color="indigo"
              @click="addDuty">
              <v-icon small dark>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-show="visible" id="class6">
      <h1>{{message}}</h1>
      <h4>{{reverseMessage}}</h4>
      <div class="firstComputed">
        <ul>
          <li
            v-for="duty in dutiesDone"
            v-bind:key="duty.id"
            >
            {{duty.name}} - 
            <span :class="[duty.done? 'blue--text' : 'red--text']">{{duty.done}}</span>
          </li>
        </ul>
      </div>
      <div class="secondComputed">
        <ul>
        <li
          v-for="duty in dutiesOrdered"
          v-bind:key="duty.id"
        >
          {{duty.name}} - 
          <span :class="['green--text']">{{duty.timeTaken}}</span> mins
        </li>
      </ul>
      </div>
    </div>
    <div v-show="visible" id="class7">
      <div class="gamesList">
        <ul>
          <li
            v-for="game in bestScoreGames"
            v-bind:key="game.id"
            > {{game.name}} - score: {{game.score}}
          </li>
        </ul>
      </div>
      <div class="slider">
        <v-subheader class="pl-2">Input range</v-subheader>
        <v-slider
            v-model="minimumScore"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
            :thumb-size="24"
            thumb-label="always"
          >
          <template v-slot:append>
              <v-text-field
                v-model="minimumScore"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
      </div>
      <div class="inputSearch">
         <ul>
          <li
            v-for="game in searchGame"
            v-bind:key="game.id"
            > {{game.name}}
          </li>
        </ul>
        <v-text-field 
          label="Enter game to search"
          v-model="gameSearched"
          >
        </v-text-field>
      </div>
    </div>
    <div v-show="visible" id="class8">
      <h1>Duties</h1>
      <ul>
        <li 
          v-for="duty in duties"
          v-bind:key="duty.id"
          @click="changedState(duty)"
          :class="{crossout: duty.done==false}"
          >{{duty.name}}
          <span :class="[duty.done? 'blue--text': 'red--text']">
            {{duty.done}}
          </span>
        </li>
      </ul>
      <div>
        <h4>Number of duties completed: {{dutiesCompleted.length}} </h4>
      </div>
    </div>
    <div class="mt-2 ml-2" id="class9">
      <div>
        <v-btn 
          medium 
          color="blue lighten-1"
          rounded
          @click="showHideText">Show/Hide text</v-btn>
      </div>
      <div class="transitionClass">
        <transition name="fade">
          <h2 v-if="transitionIf">{{textTransition.transitionClass}}</h2>
        </transition>
      </div>
      <div class="CSStransition">
        <transition name="slide-fade">
          <h2 v-if="transitionIf">{{textTransition.cssTransition}}</h2>
        </transition>
      </div>
      <div class="CSSAnimation">
        <transition name="bounce">
          <h2 v-if="transitionIf">{{textTransition.cssAnimation}}</h2>
        </transition>
      </div>
      <div class="transitionAppear">
        <transition appear>
          <h2 v-if="transitionIf">{{textTransition.transitionAppear}}</h2>
        </transition>
      </div>
      <div class="transitionBTWElements">
        <transition name="fade" mode="out-in">
          <h2 v-if="transitionIf">{{textTransition.btwElements}}</h2>
          <h2 v-else>{{textTransition.btwElementElse}}</h2>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  
  data() {
    return {
      message: 'Hola mucho gusto :)',
      newDutyEntered: null,
      priorityChoice: null,
      gameSearched: '',
      connected: true,
      visible: false,
      secondConnected: true,
      transitionIf: false,
      age: 17,
      minimumScore: 14,
      max:100,
      min:0,
      rules: [
        // value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      textTransition:{
        transitionClass: 'Transition Class',
        cssTransition:'CSS transition',
        cssAnimation: 'CSS Animation',
        transitionAppear: 'Transition Appear', //applied only when Render
        btwElements: 'Transition Between Elements',
        btwElementElse: 'Else transition'
      },
      days:[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',  
      ],
      duties:[
        {name:'Do Cws', priority: 'high', done: true, timeTaken: 128},
        {name:'Go for a walk', priority: 'low', done: false, timeTaken: 21},
        {name:'Take my dog out', priority: 'high', done: true, timeTaken: 85},
        {name:'Clean my room', priority: 'low', done: true, timeTaken: 174},
        {name:'wash cothes', priority: 'high', done: false, timeTaken: 16},
        {name:'Do the wash-up', priority: 'high', done: false, timeTaken: 192},
      ],
      priorityList:[
        'high', 'low'
      ],
      games:[
        {name:'Ludo', gender:'Strategy', score:7},
        {name:'StartWars', gender:'Adventure', score:96},
        {name:'Football', gender:'Sports', score:12},
        {name:'Redisent evil', gender:'Triller Adventure', score:54},
        {name:'Tennis', gender:'Sports', score:74},
        {name:'Racing Cars', gender:'Sports', score:28},
        {name:'Crash Bandicot', gender:'Adventure', score:35},
      ],
    }
  },
  methods: {
    addDuty(){
      this.duties.push({
        name: this.newDutyEntered,
        priority: this.priorityChoice
      })

      this.newDutyEntered = null
      this.priorityChoice = null
    },
    changedState(duty){
      duty.done = !duty.done
    },
    showHideText(){
      this.transitionIf = !this.transitionIf
    }
  },
  computed:{
    reverseMessage(){
      return this.message.split('').reverse().join('')
    },
    dutiesDone(){
      return this.duties.filter(duty => duty.done)
    },
    dutiesOrdered(){
      const newDuties = this.duties
      return newDuties.sort( (a,b) => b.timeTaken - a.timeTaken)
    },
    bestScoreGames(){
      return this.games.filter(game => game.score >= this.minimumScore)
    },
    searchGame(){
      return this.games.filter(game => game.name.includes(this.gameSearched))
    },
    dutiesCompleted(){
      return this.duties.filter(duty => duty.done)
    },
  }
};
</script>

<style scoped>
  .crossout{
    text-decoration: line-through;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(40px);
    opacity: 0;
  }
  /* CSS animation */
  .bounce-enter-active {
  animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
