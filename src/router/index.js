import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: () => import("../components/Landing.vue"),
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
      {
       path: 'class40',
       name: 'Class40',
       component: () => import("../classes/class40.vue"),
       children: [
        {
         path: "contactView/:isACustomer",
         component: () => import("../classes/class40/ContactView.vue"),
         children:[
          {
           path:'',
           name: 'Contact40',
           components:{
            default: () => import("../components/Contact.vue")
           }
          }
         ]
        }
       ]
      },
      {
       path:'class42',
       name: 'Class42',
       component: ()=> import("../classes/class42.vue"),
       children:[
        {
         path: 'contacProfile',
         name: 'ContactProfile42',
         component: ()=> import("../classes/class42/ContactProfile.vue")
        },
        {
         path: 'contactForm',
         component: ()=> import("../classes/class42/ContactForm.vue"),
         children:[
          {
           path: '',
           name: 'ContactFormAndNewsletter42',
           component: ()=> import("../classes/class42/ContactNewsletter.vue"),
          }
         ]
        }
       ],
      },
      {
       path: 'class43',
       name: 'Class43',
       component: () => import("../classes/class43.vue"),
       children:[
        {
         path: 'contacProfile',
         name: 'ContactProfile43',
         component: ()=> import("../classes/class43/ContactProfile.vue")
        },
        {
         // Allow us to route guard befire entering to this route 'ContactForm'
         beforeEnter: ((to,from, next) => {
          next(store.state.authFormclass43)
         }),
         path: 'contactForm',
         component: ()=> import("../classes/class43/ContactForm.vue"),
         children:[
          {
           path: '',
           name: 'ContactFormAndNewsletter43',
           component: ()=> import("../classes/class43/ContactNewsletter.vue"),
          }
         ]
        }
       ],
      },
      {
       path: 'class44',
       name: 'Class44',
       component: () => import ("../classes/class44.vue"),
       children:[
        {
         path: 'contacProfile',
         name: 'ContactProfile44',
         component: ()=> import("../classes/class44/ContactProfile.vue")
        },
        {
         path: 'contactForm',
         component: ()=> import("../classes/class44/ContactForm.vue"),
         children:[
          {
           path: '',
           name: 'ContactFormAndNewsletter44',
           component: ()=> import("../classes/class44/ContactNewsletter.vue"),
          }
         ]
        }
       ]
      },
      {
       path:'class45',
       name: 'Class45',
       component: ()=> import("../classes/class45.vue"),
       children:[
        {
         path: 'contacProfile',
         name: 'ContactProfile45',
         meta: { requiresAuth: true },
         component: ()=> import("../classes/class45/ContactProfile.vue")
        },
        {
         path: 'contactForm',
         component: ()=> import("../classes/class45/ContactForm.vue"),
         children:[
          {
           path: '',
           name: 'ContactFormAndNewsletter45',
           component: ()=> import("../classes/class45/ContactNewsletter.vue"),
          }
         ]
        }
       ]
      },
      {
       path: 'class47',
       name: 'Class47',
       component: ()=> import("../classes/class47.vue"),
       children:[
        {
         path:':user/:initials',
         name: 'User47',
         component: () => import("../classes/class47/User.vue"),
        }
       ]
      },
      {
       path: 'class48',
       name: 'Class48',
       component: ()=> import("../classes/class48.vue"),
       children:[
        {
         path:'user/:initials',
         name: 'User48',
         component: ()=> import("../classes/class48/User.vue")
        }
       ]
      },
      {
       path: 'class49',
       name: 'Class49',
       component: () => import("../classes/class49.vue"),
       children:[
        {
         path: 'contacProfile',
         name: 'ContactProfile49',
         component: ()=> import("../classes/class49/ContactProfile.vue")
        },
        {
         path: 'contactForm',
         component: ()=> import("../classes/class49/ContactForm.vue"),
         children:[
          {
           path: '',
           name: 'ContactFormAndNewsletter49',
           component: ()=> import("../classes/class49/ContactNewsletter.vue"),
          }
         ]
        }
       ]
      },
      {
       path: 'class50',
       name: 'Class50',
       component: () => import("../directives/class50.vue")
      },
      {
       path:'class51',
       name: 'Class51',
       component: () => import("../directives/class51.vue")
      },
      {
       path: 'class52',
       name: 'Class52',
       component: () => import("../directives/class52.vue")
      },
      {
       path: 'class53',
       name: 'Class53',
       component: () => import("../mixinFilters/class53.vue")
      },
      {
       path: 'class54',
       name: 'Class54',
       component: () => import("../mixinFilters/class54.vue")
      },
      {
       path: 'class55',
       name: 'Class55',
       component: () => import("../mixinFilters/class55.vue")
      },
      {
       path: 'class56',
       name: 'Class56',
       component: () => import("../mixinFilters/class56.vue")
      },
      {
       path: 'class57',
       name: 'Class57',
       component: () => import("../formBinding/class57.vue")
      },
     ]
    },    
    {
     path: '/contact',
     name: 'Contact',
     props:{
      isACustomer:true,
     },
     component: () => import("../components/Contact.vue"),
    },
    {
      path: "/user/:id",
      name: "User",
      component: () => import("../classes/class34/User.vue"),
    },
    {
      //**My default fallback when a page it is not found */
      path: "*", 
      name: "NotFound",
      component: () => import("../components/NotFound.vue"),
    },
  ],
  scrollBehavior (to, from, savedPosition) {  
    if(savedPosition){
     return savedPosition
    }else if (to.hash) {
      return {
       selector: to.hash
      }
    } else {     
      return { x: 0, y: 0 }
    }
  }
});

/*Global Guards */
router.beforeEach((to, from, next)=> {
  if(to.matched.some(route => route.meta.requiresAuth)){
   next(store.state.authProfileclass45)
  }
  else{
   next(store.state.auth) 
  }
})

export default router;