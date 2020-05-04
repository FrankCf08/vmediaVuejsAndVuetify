<template>
 <div>
  <v-container>
   <h1 class="blue--text">Team Component: Child of "Class Component"</h1>
   <h4> Router view on <span class="blue--text">Team component</span>  here, for the children components:</h4>
   <div
    class="mt-2">
    <router-view></router-view>
   </div>
  </v-container>
 </div>
</template>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>