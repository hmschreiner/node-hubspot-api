'use strict'

import Request from './helpers/request'
import Contacts from './endpoints/contacts'

const NodeHubspotApi = (apiKey = null) => {

  if (apiKey === null) throw new Error('ApiKey must be provided.')

  const api = new Request(apiKey)

  return {
    calendar: null,
    companies: null,
    contacts: new Contacts(api),
    blog: null,
    domains: null,
    files: null,
  }
}

module.exports = NodeHubspotApi
