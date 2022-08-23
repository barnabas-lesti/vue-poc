import type { RouteRecordRaw } from 'vue-router';

import ViewHome from '../views/view-home.vue';
import ViewNotFound from '../views/view-not-found.vue';
import RouteNames from './route-names';

export default [
  {
    path: '/',
    name: RouteNames.HOME,
    component: ViewHome,
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteNames.NOT_FOUND,
    component: ViewNotFound,
  },
] as RouteRecordRaw[];
