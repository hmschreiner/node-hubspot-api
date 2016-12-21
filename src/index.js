import Request from './helpers/request'
import Contacts from './endpoints/contacts'
import Blog from './endpoints/blog'

const NodeHubspotApi = (apiKey = null) => {

  const api = new Request(apiKey)

  return {
    calendar: null,
    companies: null,
    contacts: new Contacts(api),
    blog: new Blog(api),
    domains: null,
    files: null,
  }
}

module.exports = NodeHubspotApi
