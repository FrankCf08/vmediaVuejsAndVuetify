<template>
  <div>
    <v-navigation-drawer 
      app
      v-model="drawer"
      relative
      temporary
      >
      <v-list
        nav 
        >
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--accent-4"
          >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :href= item.sitehref
            target="_blank"
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
      color="blue darken-1"
      dark
      shrink-on-scroll
      src="@/assets/technology.jpeg"
      prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Frank Cruz</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        class="mr-1 mt-1"
        icon
        v-for="(item, i) in items"
        :key="i"
        :href= item.sitehref
        target="_blank">
        <v-icon 
          large>{{item.icon}}
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    name: "mainNav",
    data(){
      return{
        drawer: false,
        group: null,
        items:[
          {icon:'mdi-github', sitehref:'https://github.com/FrankCf08?tab=repositories', text:'GitHub'},
          {icon:'mdi-linkedin', sitehref:'https://www.linkedin.com/in/frankcruz08/', text:'LinkedIn'},
        ],
      }
    },
    watch:{
      group(){
        this.drawer = false
      }
    }
}
</script>