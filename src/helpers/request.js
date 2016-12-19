'use strict'

import axios from 'axios'

const hbEndPoint = 'https://api.hubapi.com'

const Request = (apiKey) => {

  let apiInstance = axios.create({
    baseURL: `${hbEndPoint}`,
    timeout: 10000,
  })

  return {
    get: (endPoint, params = {}) => apiInstance.get(`${endPoint}?hapikey=${apiKey}`, { params: params }),
    post: () => {},
    put: () => {},
    delete: () => {},
  }
}

export default Request
