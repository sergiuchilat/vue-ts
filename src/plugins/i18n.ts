import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";
import appLocale from "@/core/services/appLocale";

Vue.use(VueI18n);

const loadLocaleMessages = (): LocaleMessages => {
  const locales = require.context(
    "../locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: LocaleMessages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
};

export default new VueI18n({
  locale: appLocale.get(),
  fallbackLocale: appLocale.get(),
  messages: loadLocaleMessages()
});
