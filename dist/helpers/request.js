'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_ENDPOINT = 'https://api.hubapi.com';

var Request = function () {
  function Request() {
    var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Request);

    if (apiKey === null) throw new Error('You must provide the API key.');

    this.apiKey = apiKey;
    this.apiOptions = {
      host: '' + API_ENDPOINT
    };
  }

  _createClass(Request, [{
    key: 'normalizeEndPointURL',
    value: function normalizeEndPointURL(endPoint) {
      return API_ENDPOINT + '/' + endPoint + '?hapikey=' + this.apiKey;
    }
  }, {
    key: 'get',
    value: function get(endPoint) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


      return (0, _requestPromise2.default)({
        uri: this.normalizeEndPointURL(endPoint),
        qs: params,
        json: true,
        resolveWithFullResponse: true
      });
    }

    // TODO

  }, {
    key: 'post',
    value: function post() {}

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