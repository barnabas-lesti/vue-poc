import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

/**
 * Application router.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
});

/**
 * Registers a new set of routes.
 * @param newRoutes Routes to be added to the router.
 * @example
 * import { registerRoutes } from '@/core/router';
 * registerRoutes([{ path: '/', name: 'home', component: ViewHome }]);
 */
export function registerRoutes(newRoutes: RouteRecordRaw[]) {
  newRoutes.forEach((newRoute) => {
    router.addRoute(newRoute);
  });
}

export default router;
