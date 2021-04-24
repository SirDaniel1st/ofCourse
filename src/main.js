import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
Vue.use(VueRouter);
import Home from "./views/Home.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Search from "./views/Search.vue";
import Profile from "./views/Profile.vue";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/search", component: Search },
    { path: "/profile", component: Profile }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
