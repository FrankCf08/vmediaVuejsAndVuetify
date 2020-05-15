<template>
	<div>
		<!-- NavBar Drawer-->
		<v-navigation-drawer app v-model="drawer" relative clipped>
			<v-list nav class="ml-2">
    <v-list-item-title class="grey--text text--darken-1"
     >Projects</v-list-item-title
    >
    <template v-for="(item, i) in items">
     <!-- Dropdown menu -->
     <v-list-group
      v-if="item.classes"
      :key="i"
      v-model="item.model"
      :prepend-icon="item.model ? item.icon : item['icon-alt']"
      append-icon
     >
      <!-- Title of dropw down menu-->
      <template v-slot:activator>
       <v-list-item-content class="tex--center">
        <v-list-item-title>{{ item.text }}</v-list-item-title>
       </v-list-item-content>
      </template>

      <!-- List of sub-groups -->
      <v-list-group
       v-for="(classChild, index) in item.classes"
       :key="index"
       value="false"
       sub-group>
       <template v-slot:activator>
        <v-list-item-content>
         <v-list-item-title>
          {{classChild.classID}}
         </v-list-item-title>
        </v-list-item-content>
       </template>

       <!-- Items the sub-groups -->
       <v-list-item
        v-for="(child, index) in classChild.children"
        :key="index"
        @click="routeWithPathName(child, classChild.classID)"
        link>
        <v-list-item-title>{{child.text}}</v-list-item-title>
       </v-list-item>
      </v-list-group>
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
			</v-list>
		</v-navigation-drawer>

  <!-- NavBar Top -->
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
      v-if="item.classes" 
      :key="i"
      :close-on-content-click="false" 
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
       <v-list-group
        v-for="(classChild, index) in item.classes"
        :key="index"
        :prepend-icon="classChild.icon"
        >
        <template v-slot:activator>
         <v-list-item>
          <v-list-item-title>
           {{classChild.classID}}
          </v-list-item-title>
         </v-list-item>
        </template>
        <v-list>
         <v-list-item
          v-for="(child, index) in classChild.children"
          :key="index"
          :close-on-content-click="true" 
          @click="routeWithPathName(child,classChild.classID)">
          <v-list-item-title>
           {{child.text}}
          </v-list-item-title>
         </v-list-item>
        </v-list>
       </v-list-group>
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
						classes: [
       {
        classID: 'VueRouter',
        icon: 'mdi-routes',
        children:[
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
         {
          text: "Class 42",
          name: "Class42"
         },
         {
          text: "Class 43",
          name: "Class43"
         },
         {
          text: "Class 44",
          name: "Class44"
         },
         {
          text: "Class 45",
          name: "Class45"
         },
         {
          text: "Class 47",
          name: "Class47"
         },
         {
          text: "Class 48",
          name: "Class48"
         },
         {
          text: 'Class 49',
          name: "Class49"
         }
        ]
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
   routeWithPathName(item, classID){ 
    /*This If statement allows me to stop the "Duplicated Error showed when the"
     same button was pressed*/ 

    if (this.$route.name !== item.name) {
     this.$router.push({
      name: item.name,
      params:{classID:classID}
     })
     .catch(error => console.log(`Allow Views value => ${error}`)); //catches Unexpected promise false
    }
   }
		},
	};
</script>
