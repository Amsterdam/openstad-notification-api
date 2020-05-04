export class RestController {
  entity;
  restDir;
  restRelations;

  /**
   *
   * @param request
   * @param response
   */
  find = async (request, response) => {
    return response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  list = async (request, response) => {
    return response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  create = async (request, response) => {
    return response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  update = async (request, response) => {
    return response.send(instance);
  };
}
