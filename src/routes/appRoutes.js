import { restFullRoutes } from './restFullRoutes';

export function appRoutes() {
  return [
    ...restFullRoutes(controllers),
  ];
}
