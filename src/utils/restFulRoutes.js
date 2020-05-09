import { RestFulController } from './RestFulController';

export function restFulRoutes(controllers) {
  const routes = [];

  for (let controllerKey in controllers) {
    if(!controllers.hasOwnProperty(controllerKey)) {
      break;
    }

    const controller = controllers[controllerKey];

    if (controller instanceof RestFulController) {
      const restDir = `/${controller.restDir()}`;

      if (typeof controller.find === 'function') {
        routes.push({
          path: `${restDir}/find/:id`,
          method: "get",
          action: controller.find
        });
      }

      if (typeof controller.list === 'function') {
        routes.push({
          path: `${restDir}/list`,
          method: 'get',
          action: controller.list,
        });
      }
      if (typeof controller.create === 'function') {
        routes.push({
          path: `${restDir}/create`,
          method: "post",
          action: controller.create
        });
      }

      if (typeof controller.update === 'function') {
        routes.push({
          path: `${restDir}/update`,
          method: "post",
          action: controller.update
        });
      }

      if (typeof controller.delete === 'function') {
        routes.push({
          path: `${restDir}/delete`,
          method: "post",
          action: controller.delete
        });
      }
    }
  }

  return routes;
}
