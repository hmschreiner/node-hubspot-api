'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = require('../helpers/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contacts = function Contacts(api) {

  return {

    /**
     * Return all contacts
     */
    getAll: function getAll(params) {

      var defaultParams = _extends({
        count: null,
        offset: null
      }, params);

      return api.get('contacts/v1/lists/all/contacts/all', defaultParams).then(function (response) {
        return response;
      }).catch(function (error) {

        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data.message);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          throw new Error(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          throw new Error(error.message);
        }
        // console.log(error.config);
      });
    }
  };
};

exports.default = Contacts;