<template>
	<div>
		<!-- NavBar -->
		<v-navigation-drawer app v-model="drawer" relative clipped>
			<v-list nav class="ml-2">
				<v-list-item-group active-class="blue--text text--accent-4">
					<v-list-item-title class="grey--text text--darken-1"
						>Projects</v-list-item-title
					>
					<template v-for="(item, i) in items">
						<!-- Dropdown menu -->
						<v-list-group
							v-if="item.children"
							:key="i"
							v-model="item.model"
							:prepend-icon="item.model ? item.icon : item['icon-alt']"
							append-icon
						>
							<template v-slot:activator>
								<v-list-item-content class="tex--center">
									<v-list-item-title>{{ item.text }}</v-list-item-title>
								</v-list-item-content>
							</template>
							<v-list-item
								dense
								v-for="(child, i) in item.children"
								:key="i"
								@click="routeWithPathName(child)"
								link
							>
								<v-list-item-action v-if="child.icon">
									<v-icon>{{ child.icon }}</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title>{{ child.text }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-group>
						<!-- Simple button -->
						<v-list-item 
       v-else 
       :key="i" 
       @click="routeWithPathName(item)">
							<v-list-item-action>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>{{ item.text }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</template>

					<v-divider></v-divider>

					<!-- Website Links -->
					<v-list-item-title class="grey--text text--darken-1"
						>Wesbites</v-list-item-title
					>
					<template v-for="website in websites">
						<v-list-item
							:key="website.text"
							target="_blank"
							:href="website.href"
							link
						>
							<v-list-item-action>
								<v-icon>{{ website.icon }}</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>{{ website.text }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</template>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
			app
			clipped-left
			color="blue darken-4"
			dark
		>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>
				<router-link to="/" tag="span" style="cursor: pointer"
					>Frank Cruz Project</router-link
				>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items class="hidden-sm-and-up">
				<v-btn
					icon
					v-for="(website, index) in websites"
					:key="`${index}-${website.text}`"
					target="_blank"
					:href="website.href"
				>
					<v-icon>{{ website.icon }}</v-icon>
				</v-btn>
			</v-toolbar-items>

			<v-toolbar-items class="hidden-xs-only">
				<template v-for="(item, i) in items">
					<!-- Drop down menu -->
					<v-menu 
      v-if="item.children" 
      :key="i" 
      open-on-hover 
      offset-y>
						<template v-slot:activator="{ on }">
							<v-btn 
        text
        dark 
        v-on="on">
								<v-icon> {{ item["icon-alt"] }} </v-icon>
								{{ item.text }}</v-btn
							>
						</template>
						<v-list>
							<v-list-item
								v-for="(child, index) in item.children"
								:key="index"
								@click="routeWithPathName(child)"
							>
								<v-list-item-title>{{ child.text }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<!-- Simple button link -->
					<v-btn v-else 
      :key="i" 
      text 
      @click="routeWithPathName(item)">
						<v-icon left>{{ item.icon }}</v-icon>
						{{ item.text }}
					</v-btn>
				</template>
				<v-btn
					text
					v-for="(website, index) in websites"
					:key="`${index}-${website.text}`"
					target="_blank"
					:href="website.href"
				>
					<v-icon left>{{ website.icon }}</v-icon>
					{{ website.text }}
				</v-btn>
			</v-toolbar-items>
		</v-app-bar>
	</div>
</template>

<script>
	export default {
		name: "mainNav",
		data() {
			return {
    drawer: false,
    classID: 'VueRouter',
				items: [
					{
						icon: "mdi-home",
      text: "Store",
      name: "Store"
					},
					{
						icon: "mdi-account-search-outline",
      text: "Search People",
      name: "SearchPeople"
					},
					{
						icon: "mdi-chevron-up",
						"icon-alt": "mdi-chevron-down",
						text: "Classes",
						model: false,
						children: [
							{
        text: "Class 35",
        name: "Class35",
							},
							{
        text: "Class 36",
        name: "Class36",
       },
       {
        text: "Class 37",
        name: "Class37",
       },
       {
        text: "Class 38",
        name: "Class38"
       },
       {
        text: "Class 39",
        name: "Class39"
       },
       {
        text: "Class 40",
        name: "Class40"
       },
						],
					},
					{
						icon: "mdi-lock-open-outline",
      text: "Sign In",
      name: "SignIn"
					},
					{
						icon: "mdi-lock-outline",
      text: "Sign Up",
      name: "SignUp"
     },
     {
      icon: "mdi-account-box-outline",
      text: "Contact",
      name: "Contact"
     },
				],
				websites: [
					{
						icon: "mdi-github",
						href: "https://github.com/FrankCf08?tab=repositories",
						text: "GitHub",
					},
					{
						icon: "mdi-linkedin",
						href: "https://www.linkedin.com/in/frankcruz08/",
						text: "LinkedIn",
					},
				],
			};
  },
		methods: {
   routeWithPathName(item){ 
    /*This If statement allows me to stop the "Duplicated Error showed when the"
     same button was pressed*/ 
    if (this.$route.name !== item.name) {
     this.$router.push({
      name: item.name,
      params:{classID: this.classID}
     });
    }
   }
		},
	};
</script>
