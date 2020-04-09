<template>
 <div>
    <h1>messageFromParent:{{ messageSendFromParent }}</h1>
    <h2>Message print out from Child: {{ newMessage }}</h2>
 <div>
   <h2> Data passed and added type</h2>
   <ul>
    <li
     v-for="duty in arraySendFromParent"
     :key="duty.id"
     v-text="duty.name"
    ></li>
   </ul>
  </div>
  <div>
      <h2>Data Passed and created type and default</h2>
      <ul>
          <li
            v-for="game in gamePassedFromParent"
            :key="game.id"
            v-text="game.name"></li>
      </ul>
  </div>
  <div>
    <h2>Object passed from Parent</h2>
    <ul>
      <li 
        v-for="text in sendingParentObject"
        :key="text.id"
        v-text="text"></li>
    </ul>
  </div>
 </div>
</template>
<script>
export default {
    //Props as Object defining its type
 props: {
    messageSendFromParent: String,
    arraySendFromParent: Array, 
    gamePassedFromParent:{
        type: Array,
        default: null,
    },
    sendingParentObject:{
        type: [Object, Number],
        default: null,
    }
 },
  //Props using Array 
//   props: [
//      'arraySendFromParent', 
//      'messageSendFromParent'
//   ],
 data() {
  return {
   newMessage: this.messageSendFromParent,
  };
 },
};
</script>
