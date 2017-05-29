import Request from './helpers/request'
import Contacts from './endpoints/contacts'
import Blog from './endpoints/blog'
import Deals from './endpoints/deals'

const NodeHubSpotApi = (apiKey = null) => {

  const api = new Request(apiKey)

  return {
    calendar: null,
    companies: null,
    contacts: Contacts(api),
    blog: Blog(api),
    domains: null,
    files: null,
    deals: Deals(api),
  }
}

module.exports = NodeHubSpotApi
