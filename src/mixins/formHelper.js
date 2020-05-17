// Local Mixin
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
 methods:{
  addNewSubject(){  
   this.listOfSubject.push({
    subject: this.newSubject
   })
   this.newSubject = ''
  }
 }
}