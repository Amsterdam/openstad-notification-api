export class RestFulController {
  /**
   *
   * @param request
   * @param response
   */
  async find(request, response) {
    return response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  async create(request, response) {
    return response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  async update(request, response) {
    return response.send(instance);
  };

  /**
   *
   * @param request
   * @param response
   */
  async delete(request, response) {
    return response.send(instance);
  }
}
