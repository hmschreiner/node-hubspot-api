'use strict'

import Request from '../helpers/request'

const Contacts = (api) => {

  return {

    /**
     * Return all contacts
     */
    getAll: (params) => {

      let defaultParams = {
        count: null,
        offset: null,
        ...params
      }

      return api.get('contacts/v1/lists/all/contacts/all', defaultParams)
        .then(response => response)
        .catch(error => {

          if (error.response) {
              // The request was made, but the server responded with a status code
              // that falls out of the range of 2xx
              // console.log(error.response.data.message);
              // console.log(error.response.status);
              // console.log(error.response.headers);
              throw new Error(error.response.data.message)
            } else {
              // Something happened in setting up the request that triggered an Error
              throw new Error(error.message)
            }
            // console.log(error.config);
        })
    }
  }
}

export default Contacts
