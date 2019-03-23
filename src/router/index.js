import Vue from "vue"
import VueRouter from 'vue-router'
import Home from "../components/Home"
import Profile from "../components/Profile"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import ContactCompleted from "../components/ContactCompleted"
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
    path: "/skills",
    name: "skills",
    component: Skills
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/contact/completed",
    name: "contact_completed",
    component: ContactCompleted
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