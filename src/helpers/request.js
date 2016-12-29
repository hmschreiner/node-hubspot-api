import rp from 'request-promise'

const API_ENDPOINT = 'https://api.hubapi.com'

class Request {

  constructor(apiKey = null) {

    if (apiKey === null) throw new Error('You must provide the API key.')

    this.apiKey = apiKey
    this.apiOptions = {
      host: `${API_ENDPOINT}`,
    };
  }

  normalizeEndPointURL(endPoint) {
      return `${API_ENDPOINT}/${endPoint}?hapikey=${this.apiKey}`
  }

  get(endPoint, params = {}) {

    return rp({
      uri: this.normalizeEndPointURL(endPoint),
      qs: params,
      json: true,
      resolveWithFullResponse: true,
    })
  }

  // TODO
  post() {

  }

  // TODO
  put() {

  }

  // TODO
  delete() {

  }
}

export default Request
