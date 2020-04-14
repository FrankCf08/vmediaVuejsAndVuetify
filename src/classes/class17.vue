<template>
 <div>
  <v-alert
   class="alert"
   :class="position"
   :type="type"
   prominent
   dismissible>
    <header class="alert__header">
      <slot name="header">I am the header</slot>
      <a href="#" @click="closeAlert"> Close</a>
    </header>
    <div class="alert__content">
       <slot>I'm a message alert.</slot>
    </div>
    <footer class="alert__footer">
       <slot name="footer">I am the footer</slot>
    </footer>
  </v-alert>
 </div>
</template>
<script>
export default {
 props:{
  type: String,
  position: String,
 },
 data(){
  return{
  }
 },
 methods:{
  closeAlert(){
    this.$emit('hideAlert')
  },
 } 
}
</script>
<style scoped>
 /* Bloques */
.alert {
    width: 300px;
    border-radius: 15px;
    margin: 1rem 1rem 1rem 1rem;
    background-color: lightgray;
    border: 1px solid white;
    box-shadow: 1px 1px 2px gray;
    font-family: sans-serif;
    position: absolute;
}

/* Elementos */
.alert__header {
    border-bottom: 1px solid white;
    padding: 10px;
    text-align: center;
    font-weight: bold;
}

.alert__content {
    font-size: 14px;
    padding: 20px;
}

.alert__footer {
    border-top: 1px solid white;
    text-align: center;
    padding: 10px;
    font-size: 12px;
}

/* Modificadores */
/* Posición */
.alert--up-left {
    left: 0;
    top: 0;
}
.alert--down-left {
    left: 0;
    bottom: 0;
}
.alert--up-right {
    right: 0;
    top: 0;
}
.alert--down-right {
    right: 0;
    bottom: 0;
}
.alert--up-center {
    left: 34%;
    top: 34%;
}
</style>