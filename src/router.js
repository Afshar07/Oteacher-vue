import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    { path: "/register", component: SignupPage },
    { path: "/login", component: LoginPage },
    { path: "/", component: HomePage },
  ],
});

export default router;
