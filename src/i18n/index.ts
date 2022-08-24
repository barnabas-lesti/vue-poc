import * as VueI18n from 'vue-i18n';

import messages from './messages';

export default VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
