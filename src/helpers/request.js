'use strict'

import axios from 'axios'

const API_ENDPOINT = 'https://api.hubapi.com'

class Request {

  constructor(apiKey = null) {

    if (apiKey === null) throw new Error('You must provide the API key.')

    this.apiKey = apiKey
    this.apiInstance = axios.create({
      baseURL: `${API_ENDPOINT}`,
      timeout: 10000,
    })
  }

  normalizeEndPointURL(endPoint) {
      return `${endPoint}?hapikey=${this.apiKey}`
  }

  get(endPoint, params = {}) {
    return this.apiInstance.get(this.normalizeEndPointURL(endPoint), { params: params })
  }

  post() {

  }

  put() {

  }

  delete() {

  }
}

// const Request = (apiKey) => {
//
//   let apiInstance = axios.create({
//     baseURL: `${hbEndPoint}`,
//     timeout: 10000,
//   })
//
//   return {
//     get: (endPoint, params = {}) => apiInstance.get(`${endPoint}?hapikey=${apiKey}`, { params: params }),
//     post: () => {},
//     put: () => {},
//     delete: () => {},
//   }
// }

export default Request
