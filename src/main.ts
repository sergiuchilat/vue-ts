import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import axios from "axios";
import VueAxios from "vue-axios";
import appLocale from "@/core/services/appLocale";

Vue.config.productionTip = false;

Vue.prototype.$appLocale = appLocale.get();
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
