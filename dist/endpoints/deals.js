'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorHandler = require('../helpers/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _responseHandler = require('../helpers/responseHandler');

var _responseHandler2 = _interopRequireDefault(_responseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Deals = function Deals() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  if (api === null) throw new Error('Request instance must be provided on constructor.');

  return {
    createDeal: function createDeal(params) {
      var properties = params.properties,
          associations = params.associations;


      var mappedProperties = Object.keys(properties).map(function (property) {
        return {
          value: properties[property],
          name: property
        };
      });

      return api.post('deals/v1/deal', { properties: [].concat(_toConsumableArray(mappedProperties)), associations: associations }).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    },
    getAllDeals: function getAllDeals() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      return api.get('deals/v1/deal/paged', params).then(function (response) {
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    }
  };
};

exports.default = Deals;