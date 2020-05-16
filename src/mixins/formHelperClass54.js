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