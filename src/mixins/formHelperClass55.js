import Vue from 'vue'

// Global Mixin: Thi: VUe.mixin() is called for every instance created App.Vue, Class55, etc
Vue.mixin({
 created(){
  console.info('Hi from the global mixin');
  
  this.greet(this.$options.AppName)  
 },
 methods:{
  greet(name){
   alert(`Hi from ${name}`)
  }
 }
})

// Local Mixim
export default {
 data(){
  return{
   valid: true,
   newSubject: null,
   listOfSubject:[
    {subject: 'Android'},
    {subject: 'IOS'},
    {subject: 'SQL'},
    {subject: 'AngularJS'}
   ]
  }
 },
 created(){
  console.log('Hello from mixins')
  this.greetings()
 },
 methods:{
  addNewSubject(){  
   this.listOfSubject.push({
    subject: this.newSubject
   })
   this.newSubject = ''
  },
  greetings(){
   alert('Greetings from mixins');
  }
 }
}