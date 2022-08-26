import * as VueI18n from 'vue-i18n';

const messages = {
  en: {},
};

/**
 * Adds new messages to the localization engine of the app.
 * @param newMessages Messages to be added.
 * @example
 * import { registerMessages } from '../i18n';
 * import messages from './messages.yaml';
 * registerMessages(messages);
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function registerMessages(newMessages: Record<string, any>) {
  messages.en = { ...messages.en, ...newMessages.en };
}

/**
 * App localization service.
 */
export default VueI18n.createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
