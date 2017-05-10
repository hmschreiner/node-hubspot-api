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

  normalizeParams(params) {
    return { hapikey: this.apiKey, ...params }
  }

  get(endPoint, params = {}) {
    return this.apiInstance.get(`${endPoint}`, {params: this.normalizeParams(params)})
  }

  // TODO
  post(endPoint, params = {}) {
    return this.apiInstance.post(`${endPoint}?hapikey=${this.apiKey}`, this.normalizeParams(params))
  }

  // TODO
  put() {

  }

  // TODO
  delete() {

  }
}

export default Request
