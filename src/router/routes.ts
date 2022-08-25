import { homeViewRoutes } from '../views/home';
import { notFoundViewRoutes } from '../views/not-found';
import { reactivityFundamentalsViewRoutes } from '../views/reactivity-fundamentals';
import { templateSyntaxViewRoutes } from '../views/template-syntax';
import type { Route } from './types';

export default [
  ...homeViewRoutes,
  ...notFoundViewRoutes,
  ...reactivityFundamentalsViewRoutes,
  ...templateSyntaxViewRoutes,
] as Route[];
