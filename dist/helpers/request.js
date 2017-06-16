'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_ENDPOINT = 'https://api.hubapi.com';

var Request = function () {
  function Request() {
    var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Request);

    if (apiKey === null) throw new Error('You must provide the HubSpot API key.');

    this.apiKey = apiKey;
    this.apiInstance = _axios2.default.create({
      baseURL: '' + API_ENDPOINT,
      timeout: 300000 });
  }

  _createClass(Request, [{
    key: 'normalizeParams',
    value: function normalizeParams(params) {
      return _extends({ hapikey: this.apiKey }, params);
    }
  }, {
    key: 'serializeProperties',
    value: function serializeProperties(_ref) {
      var _ref$properties = _ref.properties,
          properties = _ref$properties === undefined ? {} : _ref$properties,
          _ref$property = _ref.property,
          property = _ref$property === undefined ? {} : _ref$property;


      var objParam = Object.keys(properties).length === 0 ? property : properties;

      var paramName = Object.keys(properties).length === 0 ? 'property' : 'properties';

      return Object.keys(objParam).map(function (key) {
        return paramName + '=' + encodeURIComponent(objParam[key]);
      }).join('&');
    }
  }, {
    key: 'get',
    value: function get(endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


      var serializedProperties = this.serializeProperties(params);

      if (params.hasOwnProperty('properties')) delete params.properties;

      if (params.hasOwnProperty('property')) delete params.property;

      return this.apiInstance.get(endPoint + '?' + serializedProperties, {
        params: this.normalizeParams(params)
      });
    }

    // TODO

  }, {
    key: 'post',
    value: function post(endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.apiInstance.post(endPoint + '?hapikey=' + this.apiKey, this.normalizeParams(params));
    }

    // TODO

  }, {
    key: 'put',
    value: function put() {}

    // TODO

  }, {
    key: 'delete',
    value: function _delete() {}
  }]);

  return Request;
}();

exports.default = Request;