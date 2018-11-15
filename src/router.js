import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const index = () => import("./views/frame/index");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: index
    }
  ]
});
