import Vue from "vue";
import Router from "vue-router";
import routesRegister from "./routesRegister";
import appLocale from "@/core/services/appLocale";

Vue.config.productionTip = false;
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routesRegister(appLocale.get())
});
