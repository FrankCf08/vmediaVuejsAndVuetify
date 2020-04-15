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
    <div v-show="visible" id="class3">
      <ul>
        <li 
         v-for="day in days"
         :key="day + '-class3'">{{day}}</li>
      </ul>
    </div>
    <div v-show="visible" id="class4">
        List of duties:
      <ol>
        <li
          v-for="duty in duties"
          :key="duty.name + '-class4'"
          v-show="duty.priority == 'low'">
            {{duty.name}}
           <span class="font-weight-bold">{{duty.priority}}</span></li>
      </ol>
    </div>
    <div v-show="visible" id="class5">
      <ol>
        <li 
          v-for="duty in duties"
          v-bind:key="duty.name +'-class5'">
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
            v-bind:key="duty.name + '-class6'"
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
          v-bind:key="duty.name+'class6-second'"
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
            v-bind:key="game.name + '-class7'"
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
            v-bind:key="game.name + '-class7-second'"
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
          v-bind:key="duty.name + '-class8'"
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
    <div v-show="visible" class="mt-2 ml-2" id="class9">
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
    <div v-show="visible" id="class10">
      <v-row>
        <v-col cols="12" sm="10" offset-sm="1">    
          <v-card>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="person in people"
                    :key="person.cell+'-'+ person.name.first + '-class10'"
                    class="d-flex child-flex"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="person.picture.large"
                        :alt="person.name.first"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-show="visible" id="class11">
      <h1 class="mt-2 ml-2">My duties:</h1>
      <Class11 />
    </div>
    <div v-show="visible" id="class12">
      <Class12 />
    </div>
    <div v-show="visible" id="class13">
      <Class13 class="blue--text" :messageSendFromParent="message"></Class13>
      <Class13 class="red--text" :arraySendFromParent="duties"></Class13>
      <Class13 class="green--text" :gamePassedFromParent="games"></Class13>
      <Class13
        :messageSendFromParent="message"
        :arraySendFromParent="duties"
        :gamePassedFromParent="games"
        :sendingParentObject="textTransition"></Class13>
    </div>
    <div v-show="visible" id="class14">
      <Class14 
        v-for="person in people"
        :key="person.id.value"
        :name="person.name"
        :email="person.email"
        :picture="person.picture.large"
        :location="person.location"
        ></Class14>
    </div>
    <div v-show="visible" id="class15">
      <Class15
        position="alert--down-right"
        :type="alertTypes.success">
        <template slot="header"> I am the <strong>Success</strong> header</template>
        <template> Success Content</template>
        <template slot="footer"> I am the <span class="black--text">Success</span> footer</template>
      </Class15>
      <Class15
        position="alert--up-right"
        :type="alertTypes.error">
        <template slot="header"> I am the <strong>ERROR</strong> header</template>
        <template> Error Content</template>
        <template slot="footer"> I am the <span class="black--text">ERROR</span> footer</template>
      </Class15>
      <Class15
        position="alert--down-left"
        :type="alertTypes.info">
        <template slot="header"> I am the <strong>INFO</strong> header</template>
        <template> INFO Content</template>
        <template slot="footer"> I am the <span class="black--text">INFO</span> footer</template>
      </Class15>
      <Class15
        position="alert--up-left"
        :type="alertTypes.warning">
        <template slot="header"> I am the <strong>WARNING</strong> header</template>
        <template> WARNING Content</template>
        <template slot="footer"> I am the <span class="black--text">WARNING</span> footer</template>
      </Class15>
      <Class15
        position="alert--up-center"
        >
      </Class15>
    </div>
    <div v-show="visible" id="class16">
      <Class16
        :duties="duties">
        <template slot-scope="dataToShow">
           <v-card
            class="mx-auto" 
            max-width="400">
            <v-list>
              <v-list-item-group
              color="indigo">
              <v-list-item>
                <v-list-item-content
                v-text="dataToShow.titleName">
                </v-list-item-content>
              </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </template>
      </Class16>
      <Class16
        class="ml-4"
        :duties="duties">
          <template slot-scope="props">
            <li>{{props.titleName}}</li>
          </template>
      </Class16>
      <Class16
        :duties="duties">
        <template slot-scope="myData">
          <h1>{{myData.titleName}}</h1>
        </template>
      </Class16>
    </div>
    <div v-show="visible" id="class17">
      <v-container
        fluid
        grid-list-xl
        >
        <v-row
          align="center"
          justify="center"
          style="height: 35rem;"
          >
          <v-col 
            cols="12"
            align="center"
            >
            <div class="my-4">
              <v-btn
                @click="showError = true" 
                color="red">Error</v-btn>
              <v-btn
                @click="showSuccess = true" 
                color="green">Success</v-btn>
            </div>
            <div class="my-4">
              <v-btn
                @click="showInfo = true" 
                color="blue">Info</v-btn>
              <v-btn
                @click="showWarning = true" 
                color="orange">Warning</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <Class17
        @hideAlert="showSuccess = false"
        v-show="showSuccess"
        position= "alert--up-right"
        :type="alertTypes.success">
        <template slot="header"> I am a <strong>SUCCESS</strong> Header</template>
        <template> New <strong>SUCCESS</strong> message </template>
        <template slot="footer"> I am a SUCESS footer</template>
      </Class17>
      <Class17
        @hideAlert="showError = false"
        v-show="showError"
        position= "alert--up-left"
        :type="alertTypes.error">
        <template slot="header"> I am an <strong>ERROR</strong> Header</template>
        <template> New <strong>ERROR</strong> message </template>
        <template slot="footer"> I am a ERROR footer</template>
      </Class17>
      <Class17
        @hideAlert="showWarning = false"
        v-show="showWarning"
        position= "alert--down-right"
        :type="alertTypes.warning">
        <template slot="header"> I am a <strong>WARNING</strong> Header</template>
        <template> New <strong>WARNING</strong> message </template>
        <template slot="footer"> I am a WARNING footer</template>
      </Class17>
      <Class17
        @hideAlert="showInfo = false"
        v-show="showInfo"
        position= "alert--down-left"
        :type="alertTypes.info"
        >
        <template slot="header"> I am an <strong>INFO</strong> Header</template>
        <template> New <strong>INFO</strong> message </template>
        <template slot="footer"> I am a INFO footer</template>
      </Class17>
    </div>
    <div v-show="visible" id="class18">
      <Class18/>
    </div>
    <div id="class19">
      <Class19
        :duties="duties"></Class19>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Class11 from "../classes/class11"
import Class12 from "../classes/class12"
import Class13 from "../classes/class13"
import Class14 from "../classes/class14"
import Class15 from "../classes/class15"
import Class16 from "../classes/class16"
import Class17 from "../classes/class17"
import Class18 from "../classes/class18"
import Class19 from "../classes/class19"

export default {
  name: "HelloWorld",

  components:{
    Class11,
    Class12,
    Class13,
    Class14,
    Class15,
    Class16,
    Class17,
    Class18,
    Class19,
  },
  
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
      showSuccess: false,
      showError: false,
      showInfo: false,
      showWarning: false,
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
      peopleRequestURL: 'https://randomuser.me/api/?results=500',
      people: [],
      alertTypes:{
        success:'success',
        warning:'warning',
        info: 'info',
        error: 'error',
      },
    }
  },
  mounted(){
    this.getPeople()
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
    },
    getPeople(){
      axios
        .request({
          method:'get',
          url: this.peopleRequestURL
        })
        .then(response => {
          this.people = response.data.results
        })
        .catch(error => {
          console.error('errorGetPeople', error)
        })
    },
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
