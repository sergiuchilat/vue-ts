import Vue from "vue";
import Router from "vue-router";
import routesRegister from "./routesRegister";
import appLocale from "@/core/services/appLocale";
import RouterObserver from "@/core/middleware/RouterObserver";

Vue.config.productionTip = false;
Vue.use(Router);
const router: Router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routesRegister(appLocale.get())
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
