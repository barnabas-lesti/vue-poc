import * as VueI18n from 'vue-i18n';

import en from './messages/en.yaml';

export default VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
});
