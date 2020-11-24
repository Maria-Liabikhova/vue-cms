import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";
import MyDirective from "./color";
import ListNames from "./components/ListNames.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.filter('snippet', (value) => {
  return value.slice(0,7)
});

Vue.directive('colored', MyDirective);

Vue.component('app-list', ListNames);

Vue.mixin({
  beforeUpdate () {
    console.log('Bcreated')
  }
})

export const eventEmitter = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
