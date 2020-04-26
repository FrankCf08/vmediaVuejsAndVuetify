<template>
 <div>
  <v-navigation-drawer 
   app 
   v-model="drawer" 
   relative 
   clipped>
   <v-list
    class="ml-2" 
    nav>
    <v-list-item-group 
     active-class="blue--text text--accent-4">
     <v-list-item-title class="grey--text text--darken-1">Pages</v-list-item-title>
     <v-list-item
        v-for="(item, i) in items"
        :key="`${i}-${item.text}`"
        :to="item.path"
        link
      >
      <v-list-item-icon>
       <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
       <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
     </v-list-item>

     <v-divider></v-divider>

     <v-list-item-title class="grey--text text--darken-1">Wesbites</v-list-item-title>
     <v-list-item
      v-for="(item, i) in websites"
      :key="i"
      target="_blank"
      :href="item.href"
      link
      >
      <v-list-item-icon>
       <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
       <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
     </v-list-item>
    </v-list-item-group>
   </v-list>
  </v-navigation-drawer>
  <v-app-bar 
    app
    clipped-left 
    color="blue darken-1" 
    dark src="@/assets/technology.jpeg">
   <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
   <v-toolbar-title>
    <router-link to="/" tag="span" style="cursor: pointer">
     Frank Cruz Project
    </router-link>
   </v-toolbar-title>

   <v-spacer></v-spacer>

   <v-toolbar-items class="hidden-xs-only">
    <v-btn
     text
     v-for="(item, i) in items"
     :key="i"
     :to="item.path"
     large
     >
     <v-icon 
      left 
      >{{ item.icon }} </v-icon>
     {{ item.text }}
    </v-btn>
    <v-btn
     text
     v-for="(website, index) in websites"
     :key="`${index}-${website.text}`"
     target="_blank"
     :href="website.href"
     large
    >
     <v-icon 
      left
      >{{ website.icon }} </v-icon>
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
  //  items: [
  //       { icon: 'mdi-trending-up', text: 'Most Popular' },
  //       { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
  //       { icon: 'mdi-history', text: 'History' },
  //       { icon: 'mdi-playlist-play', text: 'Playlists' },
  //       { icon: 'mdi-clock', text: 'Watch Later' },
  //     ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
   items: [
    { 
     icon: "mdi-home", 
     path: "/home", 
     text: "Home" 
    },
    { 
     icon: "mdi-lock-open-outline", 
     path: "/singin", 
     text: "Sign In" 
    },
    { 
     icon: "mdi-lock-outline", 
     path: "/singup", 
     text: "Sign Up" 
    },
   ],
   websites:[
    {
     icon: "mdi-github",
     href: "https://github.com/FrankCf08?tab=repositories",
     text: "GitHub",
    },
    {
     icon: "mdi-linkedin",
     href: "https://www.linkedin.com/in/frankcruz08/",
     text: "LinkedIn",
    }
   ]
  };
 },
 watch: {
  group() {
   this.drawer = false;
  },
 },
};
</script>
