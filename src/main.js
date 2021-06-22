import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import Vuex from "vuex";
import router from "./router.js";
const app = createApp(App);
// app.use(Vuex);
app.use(router);
app.mount("#app");
