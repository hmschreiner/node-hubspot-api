'use strict';

var _request = require('./helpers/request');

var _request2 = _interopRequireDefault(_request);

var _contacts = require('./endpoints/contacts');

var _contacts2 = _interopRequireDefault(_contacts);

var _blog = require('./endpoints/blog');

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeHubSpotApi = function NodeHubSpotApi() {
  var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  var api = new _request2.default(apiKey);

  return {
    calendar: null,
    companies: null,
    contacts: (0, _contacts2.default)(api),
    blog: (0, _blog2.default)(api),
    domains: null,
    files: null,
    deals: null
  };
};

module.exports = NodeHubSpotApi;