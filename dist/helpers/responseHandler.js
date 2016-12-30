'use strict';

module.exports = function (response) {

  if (response.statusText === 'error') {
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    console.log('\n      ======> Error\n      Message: ' + response.body.message + '\n      Status: ' + error.statusCode + '\n      headers: ' + JSON.stringify(error.headers) + '\n    ');

    throw new Error(response.body.message);
  }

  return response;
};