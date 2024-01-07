
import { createI18n } from 'vue-i18n';

// TODO dynamic imports
import localeEN from './locales/en.json';
import localeIT from './locales/it.json';

const messages = {
  "en_GB": localeEN,
  "it_IT": localeIT
};

export default createI18n({
  legacy: false,
  locale: 'en_GB',
  fallbackLocale: 'en_GB',
  messages,
})
