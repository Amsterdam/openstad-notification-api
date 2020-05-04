"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restFulRoutes = restFulRoutes;

function restFulRoutes(controllers) {
  var routes = [];

  for (var controllerKey in controllers) {
    if (!controllers.hasOwnProperty(controllerKey)) {
      break;
    }

    var controller = controllers[controllerKey];

    if (controller instanceof RestFulController) {
      var restDir = "/".concat(controller.restDir);

      if (controller.hasOwnProperty('find')) {
        routes.push({
          path: "".concat(restDir, "/find/:id"),
          method: "get",
          action: controller.find
        });
      }

      if (controller.hasOwnProperty('list')) {
        routes.push({
          path: "".concat(restDir, "/list"),
          method: 'get',
          action: controller.list
        });
      }

      if (controller.hasOwnProperty('create')) {
        routes.push({
          path: "".concat(restDir, "/create"),
          method: "post",
          action: controller.create
        });
      }

      if (controller.hasOwnProperty('update')) {
        routes.push({
          path: "".concat(restDir, "/update"),
          method: "post",
          action: controller.update
        });
      }

      if (controller.hasOwnProperty('delete')) {
        routes.push({
          path: "".concat(restDir, "/delete"),
          method: "delete",
          action: controller["delete"]
        });
      }
    }
  }

  return routes;
}