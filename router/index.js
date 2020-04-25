import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
   {
    path: "/",
    name: "Landing",
    component: () => import("../components/Landing.vue"),
    meta: { requiresAuth: true }
   },
   {
     path: "/home",
     name: "Home",
     component: () => import("../components/Home.vue"),
   },
   {
     path: "/singIn",
     name: "SignIn",
     component: () => import("../components/SignIn.vue")
   },
   { 
    path: "*", 
    name: "NotFound",
    component: () => import("../components/NotFound.vue")

   }

  ]
});

export default router;
