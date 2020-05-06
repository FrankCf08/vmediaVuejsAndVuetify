<template>
		<div id="class36">
			<v-card
				class="mx-auto alignment"
				color="blue lighten-4">
				<h2> Class Component <span class="blue--text"> "{{this.getClass}}"</span></h2> 
				<v-card
					class="mx-auto alignment">
					<v-row>
						<v-col>
						<h3>Router view on <span class="blue--text">Class component</span>, display below:</h3>
						<router-view/>
						</v-col>
					</v-row>
				</v-card>
			</v-card>
		</div>
</template>

<script>
export default {
  name: "Classes",
  computed:{
   getClass(){
    const classValue = this.$route.path.split('/')[3]
    return classValue[0].toUpperCase() + classValue.slice(1,5) + ' ' + classValue.slice(5)
   }
  }
}
</script>
<style scoped>
	.alignment{
		padding: 2rem 1rem 2rem 1rem;
	}
</style>