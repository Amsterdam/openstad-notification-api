"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _appRoutes = require("../routes/appRoutes");

var _controllers = require("../controllers");

function registerRoutes(app) {
  return (0, _appRoutes.appRoutes)().forEach(function (route) {
    app[route.method](route.path, function (request, response, next) {
      if (route.action) {
        return route.action(request, response); // TODO: error handling
        // .then(() => next)
        // .catch((err: any) => next(err));
      }
    });
  });
}