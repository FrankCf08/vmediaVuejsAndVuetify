<template>
 <div>
  <v-container fluid>
   <v-flex xs12 class="text-center" mt-5>
    <h1
    class="blue--text"
    :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-1']"
    >Sign Up</h1>
   </v-flex>
   <v-flex xs12 sm6 offset-sm3 mt-3>
    <form>
     <v-layout column>
      <v-flex>
       <v-text-field
        name="email"
        label="Email"
        id="email"
        type="email"
        required
       ></v-text-field>
      </v-flex>
      <v-flex>
       <v-text-field
        name="password"
        label="Password"
        id="password"
        type="password"
        required
       ></v-text-field>
      </v-flex>
       <v-flex>
       <v-text-field
        name="confirmpassword"
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        required
       ></v-text-field>
      </v-flex>
      <v-flex class="text-center" mt-5>
       <v-btn color="primary" type="submit">Sign Up</v-btn>
      </v-flex>
     </v-layout>
    </form>
   </v-flex>
  </v-container>
 </div>
</template>
