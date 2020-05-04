import { RestFulController } from '../utils/RestFulController';
import { restDir } from '../routes/event';

export class EventController extends RestFulController {
  restDir = restDir;

  /**
   *
   * @param request
   * @param response
   */
  create = async (request, response) => {
    return response.send('create');
  };
}
