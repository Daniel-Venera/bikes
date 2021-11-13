import Vue from "vue";
import VueRouter from "vue-router";
import Bikes from "../views/Bikes.vue";
import Bike from "../views/Bike.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Bikes",
    component: Bikes,
  },
  {
    path: "/bikes/:id",
    name: "Bike",
    component: Bike,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
