'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errorHandler = require('../helpers/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _responseHandler = require('../helpers/responseHandler');

var _responseHandler2 = _interopRequireDefault(_responseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contacts = function () {
  function Contacts() {
    var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Contacts);

    if (api === null) throw new Error('Request instance must be provided on constructor.');

    this.api = api;
  }

  _createClass(Contacts, [{
    key: 'getAll',
    value: function getAll(params) {

      var defaultParams = _extends({
        count: null,
        vidOffset: null
      }, params);

      return this.api.get('contacts/v1/lists/all/contacts/all', defaultParams).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    }
  }, {
    key: 'createContact',
    value: function createContact(properties) {

      var mappedProperties = Object.keys(properties).map(function (property) {
        return {
          property: property,
          value: properties[property]
        };
      });

      return this.api.post('contacts/v1/contact', { properties: [].concat(_toConsumableArray(mappedProperties)) }).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    }
  }]);

  return Contacts;
}();

exports.default = Contacts;