import * as VueI18n from 'vue-i18n';

import { layoutMessages } from '../layout';

export default VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: Object.assign({}, layoutMessages),
});
