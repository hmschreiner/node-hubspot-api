# node-hubspot-api
[![Build Status](https://api.travis-ci.org/hmschreiner/node-hubspot-api.svg)](https://travis-ci.org/hmschreiner/node-hubspot-api.svg?branch=master)

A wrapper for the HubSpot API based on Node - http://developers.hubspot.com/docs/overview

## Installation

  `npm install node-hubspot-api --save`

## Tests

  `npm test`

## Get Started
```javascript
import NodeHubspotApi from 'node-hubspot-api'

const api = new NodeHubspotApi('your_api_key')
```

## Available Resources

### Contacts

#### - Get all contacts
Return all contacts that have been created. A paginated list of contacts will be returned with a maximum of 100 contacts per page.

Parameter | Description | Required | Default
--------- | ----------- | :------: | :-----:
**count** | Specify the amount of contacts to return. | No | 20
**vidOffset** | Used to page through the contacts. | No | -
**property** | By default, only a few standard properties will be included in the response data. Include the 'property' parameter to get the specified property in the response. | No | -
**showListMemberships** | Indicate whether current list memberships should be fetched for the contact. | No | false

**Usage:**
```javascript
api.contacts.getAll({
  count: 20,
  vidOffset: null,
  property: null,
  showListMemberships: false,
})
.then(response => console.log(response.data.contacts))
.catch(error => console.error(error))
```

**Reference:** http://developers.hubspot.com/docs/methods/contacts/get_contacts


### Blog

#### - Get all blogs

**Usage:**
```javascript
api.blogs.getAllBlogs()
  .then(response => console.log(response.data.objects))
  .catch(error => console.error(error))
```

**Reference:** http://developers.hubspot.com/docs/methods/blogv2/get_blogs

## Disclaimer
This tool is under development and don't have a stable version yet.

*DO NOT USE IT IN PRODUCTION!*
