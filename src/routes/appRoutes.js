import { restFulRoutes } from './restFulRoutes';

export function appRoutes() {
  return [
    ...restFulRoutes(controllers),
  ];
}
