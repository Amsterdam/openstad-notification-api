import { RestFulController } from '../utils/RestFulController';
import { restDir } from '../routes/event';

export class EventController extends RestFulController {
  restDir() {
    return restDir;
  }

  /**
   *
   * @param request
   * @param response
   */
  async create(request, response) {
    return response.send('create');
  };
}
