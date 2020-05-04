export function restFullRoutes(controllers) {
  const routes = [];

  for (let controllerKey in controllers) {
    if(!controllers.hasOwnProperty(controllerKey)) {
      break;
    }

    const controller = controllers[controllerKey];

    if (controller instanceof RestController) {
      const restDir = `/${controller.restDir}`;

      if (controller.hasOwnProperty('find')) {
        routes.push({
          path: `${restDir}/find/:id`,
          method: "get",
          action: controller.find
        });
      }

      if (controller.hasOwnProperty('list')) {
        routes.push({
          path: `${restDir}/list`,
          method: 'get',
          action: controller.list,
        });
      }

      if (controller.hasOwnProperty('create')) {
        routes.push({
          path: `${restDir}/create`,
          method: "post",
          action: controller.create
        });
      }

      if (controller.hasOwnProperty('update')) {
        routes.push({
          path: `${restDir}/update`,
          method: "post",
          action: controller.update
        });
      }

      if (controller.hasOwnProperty('delete')) {
        routes.push({
          path: `${restDir}/delete`,
          method: "delete",
          action: controller.delete
        });
      }
    }
  }

  return routes;
}
