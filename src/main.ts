import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import appLocale from "@/core/services/appLocale";

Vue.config.productionTip = false;

Vue.prototype.$appLocale = appLocale.get();

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
