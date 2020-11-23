import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('../pages/Home.vue'),
    
  },
  {
    path: "/VBind",
    component: () => import('../pages/VBind.vue'),
    
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
  {
    path: "/CondRendering",
    component: () => import('../pages/CondRendering.vue'),
  },
  {
    path: "/ListRendering",
    component: () => import('../pages/ListRendering.vue'),
  },
  {
    path: "/ComputedPropWatch",
    component: () => import('../pages/ComputedPropWatch.vue'),
  },
  {
    path: "/Refs",
    component: () => import('../pages/Refs.vue'),
  },
  {
    path: "/Binding",
    component: () => import('../pages/Binding.vue'),
  },
  {
    path: "/BindingInlineStyles",
    component: () => import('../pages/BindingInlineStyles.vue'),
  },
  {
    path: "/Directives",
    component: () => import('../pages/Directives.vue'),
  },
  {
    path: "/Filters",
    component: () => import('../pages/Filters.vue'),
  },
  {
    path: "/ListFilters",
    component: () => import('../pages/ListFilters.vue'),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
