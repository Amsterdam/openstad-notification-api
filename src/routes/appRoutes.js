import { restFulRoutes } from '../utils/restFulRoutes';
import { eventRoutes } from './event';
import { EventController } from '../controllers';

const controllers = {
  // event: new EventController,
}

export function appRoutes() {
  return [
    // ...restFulRoutes(controllers),
    // ...eventRoutes(controllers.event),
  ];
}
