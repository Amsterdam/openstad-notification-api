"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventRoutes = eventRoutes;
exports.restDir = void 0;
var restDir = 'event';
exports.restDir = restDir;

function eventRoutes(eventController) {
  return [{
    path: "/".concat(restDir, "/create"),
    method: "post",
    action: eventController.create
  }];
}