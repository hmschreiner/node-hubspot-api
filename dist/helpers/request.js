'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hbEndPoint = 'https://api.hubapi.com';

var Request = function Request(apiKey) {

  var apiInstance = _axios2.default.create({
    baseURL: '' + hbEndPoint,
    timeout: 10000
  });

  return {
    get: function get(endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return apiInstance.get(endPoint + '?hapikey=' + apiKey, { params: params });
    },
    post: function post() {},
    put: function put() {},
    delete: function _delete() {}
  };
};

exports.default = Request;