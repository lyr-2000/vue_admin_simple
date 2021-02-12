import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
// import Home from
// import NoFound from ;
// import layout from '@/layout/index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: ()=>import( "../views/Home.vue"),
    children:[
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path:'/noFound',
        name:'noFound',
        component: ()=>import('@/layout/NotFound.vue')
      }
    ]
  },

  {
    path:'/login',
    name:'Login',
    component: ()=> import('@/layout/Login.vue')
  }
  ,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: ()=>import("@/layout/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
