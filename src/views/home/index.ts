import { registerMessages } from '@/core/i18n';
import { registerNavigationLinks } from '@/core/navigation';
import { registerRoutes } from '@/core/router';
import messages from './messages.yaml';
import ViewHome from './view-home.vue';

registerMessages(messages);

registerRoutes([
  {
    path: '/',
    name: 'home',
    component: ViewHome,
  },
]);

registerNavigationLinks([{ labelKey: 'views.home.title', routeName: 'home' }]);
