import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('../pages/Home.vue'),
    
  },
  {
    path: "/DataAndMethods",
    component: () => import('../pages/DataAndMethods.vue'),
  },
  {
    path: "/Events",
    component: () => import('../pages/Events.vue'),
  },
  {
    path: "/EventModifiers",
    component: () => import('../pages/EventModifiers.vue'),
  },
  {
    path: "/KeyboardModifires",
    component: () => import('../pages/KeyboardModifires.vue'),
  },
  {
    path: "/Bindings",
    component: () => import('../pages/Bindings.vue'),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
