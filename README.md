# node-hubspot-api
![version](http://img.shields.io/npm/v/node-hubspot-api.svg)
[![Build Status](https://api.travis-ci.org/hmschreiner/node-hubspot-api.svg)](https://travis-ci.org/hmschreiner/node-hubspot-api.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/hmschreiner/node-hubspot-api/badge.svg?branch=master)](https://coveralls.io/github/hmschreiner/node-hubspot-api?branch=master)

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
List all of the blogs for a portal. Supports paging and filtering.

Parameter | Description | Required | Default
--------- | ----------- | :------: | :-----:
**limit** | The number of items to return. | No | 20
**offset** | The offset set to start returning rows from. | No | 0
**created** | exact, range, gt, gte, lt, lte - When the post was first created, in milliseconds since the epoch. | No | -
**deleted_at** | exact, gt, gte - When the post was deleted, in milliseconds since the epoch. Zero if the blog post was never deleted. | No | -
**name** | exact, in - The internal name of the blog | No | -

**Usage:**
```javascript
api.blogs.getAllBlogs({
  limit: 20,
  offset: 0,
  created: null,
  deleted_at: null,
  name: null,
})
.then(response => console.log(response.data.objects))
.catch(error => console.error(error))
```

**Reference:** http://developers.hubspot.com/docs/methods/blogv2/get_blogs

#### - List blog posts
Get the posts from your blogs.

Parameter | Description | Required | Default
--------- | ----------- | :------: | :-----:
**limit** | The number of items to return. | No | 20
**offset** | The offset set to start returning rows from. | No | 0
**archived** | Returns the posts that match the boolean lookup (e.g. archived=false returns all posts currently not archived). | No | false
**blog_author_id** | Returns the posts that match a particular blog author ID value. | No | -
**campaign** | Returns the posts that match the campaign guid. | No | -
**content_group_id** | Returns the posts that match the blog guid. The blog guid can be found in the blog dashboard URL (e.g. https://app.hubspot.com/blog/:portal_id/dashboard/:blog_guid). | No | -
**created** | Returns the posts that match a particular created time value. Supports exact, range, gt, gte, lt, lte lookups. | No | -
**deleted_at** | Returns the posts that match a particular deleted time value. Supports exact, gt, gte, lt, lte lookups. | No | -
**name** | Returns the posts that match the name value. Supports exact, contains, icontains, ne lookups. | No | -
**slug** | Returns the posts that match a particular slug value. | No | -
**updated** | Returns the posts that match a particular updated time. Supports exact, range, gt, gte, lt, lte lookups. | No | -
**state** | DRAFT, PUBLISHED, or SCHEDULED. | No | PUBLISHED
**order_by** | Return the posts ordered by a particular field value. Blog posts can currently only be sorted by publish_date. Use a negative value to sort in descending order (e.g. order_by=-publish_date). | No | publish_date

**Usage:**
```javascript
api.blogs.getPosts({
  limit: 20,
  offset: 0,
  archived: false,
  blog_author_id: null,
  campaign: null,
  content_group_id: null,
  created: null,
  deleted_at: null,
  name: null,
  updated: null,
  state: 'PUBLISHED',
  order_by: 'publish_date',
})
.then(response => console.log(response.data.objects))
.catch(error => console.error(error))
```

**Reference:** http://developers.hubspot.com/docs/methods/blogv2/get_blog_posts

#### - Get the blog post by ID
Get a specific blog post by ID.

**Usage:**
```javascript
api.blogs.getPostById(3198892953)
.then(response => console.log(response.data))
.catch(error => console.error(error))
```

**Reference:**
http://developers.hubspot.com/docs/methods/blogv2/get_blog_posts_blog_post_id

## Disclaimer
This tool is under development and don't have a stable version yet.

*DO NOT USE IT IN PRODUCTION!*
