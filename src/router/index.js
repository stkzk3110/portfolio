import Vue from "vue"
import VueRouter from 'vue-router'
import Top from "../components/Top"
import Terms from "../components/Terms"
import PageNotFound from "../components/PageNotFound"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms
  },
  {
    path: "*",
    name: "pagenotfound",
    component: PageNotFound
  }
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});