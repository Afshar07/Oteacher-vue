import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/register", component: SignupPage },
  ],
});

export default router;
