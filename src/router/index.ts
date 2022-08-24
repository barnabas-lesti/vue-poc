import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';

export * from './types';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
