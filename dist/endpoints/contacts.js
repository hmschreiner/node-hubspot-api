'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _errorHandler = require('../helpers/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _responseHandler = require('../helpers/responseHandler');

var _responseHandler2 = _interopRequireDefault(_responseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Contacts = function Contacts() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  if (api === null) throw new Error('Request instance must be provided on constructor.');

  return {
    mapProperties: function mapProperties(properties) {

      return Object.keys(properties).map(function (property) {
        return {
          property: property,
          value: properties[property]
        };
      });
    },
    getAll: function getAll(params) {

      var defaultParams = _extends({
        count: null,
        vidOffset: null
      }, params);

      return api.get('contacts/v1/lists/all/contacts/all', defaultParams).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    },
    createContact: function createContact(properties) {

      var mappedProperties = this.mapProperties(properties);

      return api.post('contacts/v1/contact', { properties: [].concat(_toConsumableArray(mappedProperties)) }).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    },
    updateContact: function updateContact(properties, id) {

      var mappedProperties = this.mapProperties(properties);

      return api.post('contacts/v1/contact/vid/' + id + '/profile', { properties: [].concat(_toConsumableArray(mappedProperties)) }).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    }
  };
};

exports.default = Contacts;