import { layoutMessages } from '../layout';
import { homeViewMessages } from '../views/home';
import { notFoundViewMessages } from '../views/not-found';
import { templateSyntaxViewMessages } from '../views/template-syntax';

export default {
  en: {
    ...layoutMessages.en,

    ...homeViewMessages.en,
    ...notFoundViewMessages.en,
    ...templateSyntaxViewMessages.en,
  },
};
