"use strict";

require("babel-polyfill");

var _express = _interopRequireDefault(require("express"));

var _registerRoutes = require("./utils/registerRoutes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Constants
var PORT = 9090;
var HOST = '0.0.0.0'; // App

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.send('Hello World');
});
(0, _registerRoutes.registerRoutes)(app);
app.listen(PORT, HOST);

app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log(r.route.path);
  }
});

console.log("Running on http://".concat(HOST, ":").concat(PORT));