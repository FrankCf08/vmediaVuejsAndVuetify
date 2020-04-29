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
     path: "/store",
     name: "Store",
     component: () => import("../components/Store.vue"),
   },
   {
    path: "/searchPeople",
    name: "SearchPeople",
    component: () => import("../components/SearchPeople.vue"),
   },
   {
     path: "/signin",
     name: "SignIn",
     component: () => import("../components/SignIn.vue")
   },
   {
    path: "/singup",
    name: "SignUp",
    component: () => import("../components/SingUp.vue")
   },
   {
    path: "/classes",
    name: "Classes",
    component: () => import("../components/Classes.vue"),
    children:[
      {
        path:'userFrank',
        name:'UserFrank',
        component: () => import("../classes/class35/User.vue")
      }
    ]
   },
   {
    path: "/user/:id",
    name: "User",
    component: () => import("../classes/class34/User.vue")
   },
   { 
    path: "*", 
    name: "NotFound",
    component: () => import("../components/NotFound.vue")
   }

  ]
});

export default router;