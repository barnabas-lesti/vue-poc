import type { Route } from '../../router';
import NotFoundView from './not-found-view.vue';

export default [
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundView,
  },
] as Route[];
