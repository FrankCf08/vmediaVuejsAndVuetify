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
      meta: { requiresAuth: true },
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
      component: () => import("../components/SignIn.vue"),
    },
    {
      path: "/singup",
      name: "SignUp",
      component: () => import("../components/SingUp.vue"),
				},
				{
     path: "/classes/:classID",
     name: "Classes",
     component: () => import("../components/Classes.vue"),
     children:[
      {
       path:'class35',
       component: () => import("../classes/class35.vue"),
       children:[
        {
         path:'',
         name:'Class35',
         component: () => import("../classes/class35/User.vue")
        },
       ]
      },
      {
       path: 'class36',
       name: 'Class36',
       component: () => import("../classes/class36.vue"),
       children:[
        {
         path: "team/:id",
         component: () => import("../classes/class36/Team.vue"),
         children: [
          {
           path: "",
           component: () => import("../classes/class36/Home.vue"),
          },
          {
           path: "profile",
           component: () => import("../classes/class36/Profile.vue"),
          },
          {
           path: "bio",
           component: () => import("../classes/class36/Bio.vue"),
          },
         ]
        }
       ]
      },
      {
       path: 'class37',
       name: 'Class37',
       component: () => import("../classes/class37.vue"),
       children:[
        {
         path: "team/:id",
         component: () => import("../classes/class37/Team.vue"),
         children: [
          {
           path: "",
           name: 'HomeClass37',
           component: () => import("../classes/class37/Home.vue"),
          },
          {
           path: "profile",
           name: 'Profile',
           component: () => import("../classes/class37/Profile.vue"),
          },
          {
           path: "bio",
           name: 'Bio',
           component: () => import("../classes/class37/Bio.vue"),
          },
         ]
        }
       ]
      },
      {
       path: 'class38',
       name: 'Class38',
       component: () => import("../classes/class38.vue"),
       children:[
        {
         path: "team/:id",
         component: () => import("../classes/class38/Team.vue"),
         children:[
          {
           path:'',
           name: 'HomeClass38',
           components: {
            default: () => import("../classes/class38/Home.vue"),
            profile38: () => import("../classes/class38/Profile.vue"),
            bio38: () => import("../classes/class38/Bio.vue"),
           },
          }
         ],
        },
       ]
      },
      {
       path: 'class39',
       alias: 'aliasRedirection' , //Redirecting by using alias (it doesn;t change my path) classes/VueRouter/aliasRedirection
       name: 'Class39',
       component: () => import("../classes/class39.vue"),
       children:[
        {
         path: "team/:id",
         component: () => import("../classes/class39/Team.vue"),
         children:[
          {
           path:'',
           // redirect: '/', //Redirecting using 'path'
           redirect: {name:'Store'}, //Tedirecting using 'name component'
           name: 'HomeClass39',
           components: {
            default: () => import("../classes/class39/Home.vue"),
            profile38: () => import("../classes/class39/Profile.vue"),
            bio38: () => import("../classes/class39/Bio.vue"),
           },
          }
         ],
        },
       ]
      },
     ]
				},
    {
      path: "/user/:id",
      name: "User",
      component: () => import("../classes/class34/User.vue"),
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("../components/NotFound.vue"),
    },
  ],
});

export default router;