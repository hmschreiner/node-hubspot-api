'use strict';

module.exports = function (response) {

  if (response.statusText === 'error') {

    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    throw new Error(response.body.message);
  }

  return response;
};