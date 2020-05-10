<template>
 <div>
  <ContactProfile/>
  <ContactForm/>
  <!-- 1. Using route.params to get my props -->
  <template 
   v-if="$route.params.isACustomer == 'true'">
   <ContactNewsletter/>
  </template>

  <!-- 2. Using props passed by the router and getting it on a component by props:[''] -->
  <!-- {{isACustomer}}
  <template 
   v-if="isACustomer == 'true'">
   <ContactNewsletter/>
  </template> -->

  <!-- 3. Using props as object and passing a default value for isACustomer-->
  <template 
   v-if="isACustomer">
   <ContactNewsletter/>
  </template>
 </div>
</template>
<script>
import ContactProfile from "../classes/class40/ContactProfile"
import ContactForm from "../classes/class40/ContactForm"
import ContactNewsletter from "../classes/class40/ContactNewsletter"

export default {
 props:['isACustomer'],
 components:{
  ContactProfile,
  ContactForm,
  ContactNewsletter,
 }
}
</script>