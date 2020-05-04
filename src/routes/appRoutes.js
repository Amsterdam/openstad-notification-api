import { restFulRoutes } from '../utils/restFulRoutes';
import { eventRoutes } from './event';
import { EventController } from '../controllers';

export function appRoutes() {
  return [
    ...restFulRoutes(controllers),
    ...eventRoutes(),
  ];
}
