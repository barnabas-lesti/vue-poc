import { registerMessages } from '@/core/i18n';
import { registerRoutes } from '@/core/router';
import messages from './messages.yaml';
import ViewNotFound from './view-not-found.vue';

registerMessages(messages);

registerRoutes([
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: ViewNotFound,
  },
]);
