<template>
 <div>
  <v-container
   class="mt-12 pt-4">
   <v-row
    align="center"
    justify="center">
    <v-col
					class="text-center"
     cols="12"
					sm="4"
     v-for="(person, i) in randomPeople.people"
     :key="i">
     <router-link
      tag="button"
      :to="`/user/${person.name.first}-${person.name.last}`"
      >
      <v-btn
							width="220"
							:style="{background: randomColor(), color: 'white'}"
       large
       v-text="`${person.name.first} ${person.name.last}`">
      </v-btn>
     </router-link>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
	name:'Class34',

 computed:{
   ...mapState(['randomPeople'])
 },
 methods:{
   randomColor(){
				return '#'+(Math.random()*0xFFFFFF<<0).toString(16)
			},
 }
}
</script>