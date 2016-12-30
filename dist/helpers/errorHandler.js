"use strict";

module.exports = function (error) {

  if (error.response) {
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    console.log("\n        ======> Error\n        Message: " + error.response.data.message + "\n        Status Code: " + error.response.status + "\n        Status: " + error.response.data.status + "\n        headers: " + JSON.stringify(error.response.headers) + "\n      ");

    throw new Error(error.response.data.message);
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error(error);
  }
};