import Vue from "vue"
import VueRouter from 'vue-router'
import Home from "../components/Home"
import Profile from "../components/Profile"
import Works from "../components/Works"
import Contact from "../components/Contact"
import PageNotFound from "../components/PageNotFound"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/works",
    name: "works",
    component: Works
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
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