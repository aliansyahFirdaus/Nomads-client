import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/homePage.vue";
import LoginPage from "../views/loginPage.vue";
import RegisterPage from "../views/registerPage.vue";
import ProfilePage from "../views/profilePage.vue";
import Detailpage from "../views/detailTourPage.vue";
import TagPage from "../views/tagPage.vue";
import CountryPage from "../views/countryPage.vue";

const routes = [
  { path: "/", name: "home-page", component: HomePage },
  { path: "/login", name: "login-page", component: LoginPage },
  { path: "/register", name: "register-page", component: RegisterPage },
  { path: "/profile", name: "profile-page", component: ProfilePage },
  { path: "/detail/:id", name: "detail-page", component: Detailpage },
  { path: "/tag/:name", name: "tag-page", component: TagPage },
  { path: "/country/:name", name: "contry-page", component: CountryPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
