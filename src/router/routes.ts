import { homeRoutes } from '../views/home';
import { notFoundRoutes } from '../views/not-found';
import type { Route } from './types';

export default [...homeRoutes, ...notFoundRoutes] as Route[];
