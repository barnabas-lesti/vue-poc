import { homeViewRoutes } from '../views/home';
import { notFoundViewRoutes } from '../views/not-found';
import { templateSyntaxViewRoutes } from '../views/template-syntax';
import type { Route } from './types';

export default [
  ...homeViewRoutes,
  ...notFoundViewRoutes,
  ...templateSyntaxViewRoutes,
] as Route[];
