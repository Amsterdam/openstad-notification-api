export class RestFulController {
  entity;
  restDir;

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
