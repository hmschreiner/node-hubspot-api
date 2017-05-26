'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _errorHandler = require('../helpers/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  if (api === null) throw new Error('Request instance must be provided on constructor.');

  return {
    getAllBlogs: function getAllBlogs(params) {

      return api.get('content/api/v2/blogs', _extends({}, params)).then(function (response) {
        return response;
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    },
    getPosts: function getPosts(params) {

      return api.get('content/api/v2/blog-posts', _extends({}, params)).then(function (response) {
        return response;
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    },
    getPostById: function getPostById(postId) {

      return api.get('content/api/v2/blog-posts/' + postId).then(function (response) {
        return response;
      }).catch(function (error) {
        return (0, _errorHandler2.default)(error);
      });
    }
  };
};

module.exports = Blog;