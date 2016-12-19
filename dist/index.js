'use strict';

var _request = require('./helpers/request');

var _request2 = _interopRequireDefault(_request);

var _contacts = require('./endpoints/contacts');

var _contacts2 = _interopRequireDefault(_contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeHubspotApi = function NodeHubspotApi() {
  var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  if (apiKey === null) throw new Error('ApiKey must be provided.');

  var api = new _request2.default(apiKey);

  return {
    calendar: null,
    companies: null,
    contacts: new _contacts2.default(api),
    blog: null,
    domains: null,
    files: null
  };
};

module.exports = NodeHubspotApi;