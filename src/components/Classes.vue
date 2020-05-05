<template>
		<div id="class36">
			<!-- <v-container
				class="alignment">
				<v-card
					class="mx-auto alignment"
					color="blue">
					Component: Class36
					<Class36/>
					<v-card
						class="mx-auto alignment"
						max-width="600">
						<v-row>
							<v-col>
							<h3>Router view on <span class="blue--text">Class component</span>, display below:</h3>
							<router-view></router-view>
							</v-col>
						</v-row>
					</v-card>
				</v-card>
			</v-container> -->
			<router-view></router-view>
		</div>
</template>

<script>
// import Class36 from "../classes/class36"

export default {
  name: "Classes",

  components:{
				// Class36,
		},
}
</script>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>