import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Icons from "./routes/Icons.vue";
import Home from "./routes/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/icons", component: Icons },
  { path: "/", component: Home }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
