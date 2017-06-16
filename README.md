# node-hubspot-api
![version](http://img.shields.io/npm/v/node-hubspot-api.svg)
[![Build Status](https://api.travis-ci.org/hmschreiner/node-hubspot-api.svg)](https://travis-ci.org/hmschreiner/node-hubspot-api.svg?branch=master)

A wrapper for the HubSpot API based on Node - http://developers.hubspot.com/docs/overview

## Installation

  `npm install node-hubspot-api --save`

## Tests

  `npm run test`

## Get Started
```javascript
import NodeHubSpotApi from 'node-hubspot-api'

const api = new NodeHubSpotApi('your_api_key')
```

## Available Resources

### Contacts

#### - Get all contacts
Return all contacts that have been created. A paginated list of contacts will be returned with a maximum of 100 contacts per page.

| Parameter | Description | Required | Default |
| --------- | ----------- | :------: | :-----: |
| **count** | Specify the amount of contacts to return. | No | 20 |
| **vidOffset** | Used to page through the contacts. | No | - |
| **property** | By default, only a few standard properties will be included in the response data. Include the 'property' parameter to get the specified property in the response. | No | - |
| **showListMemberships** | Indicate whether current list memberships should be fetched for the contact. | No | false |

**Usage:**
```javascript
api.contacts.getAll({
  count: 20,
  vidOffset: null,
  property: [
    'fistname', 'lastname', 'email',
  ],
  showListMemberships: false,
})
.then(response => console.log(response.data.contacts))
.catch(error => console.error(error))
```

**Reference:** http://developers.hubspot.com/docs/methods/contacts/get_contacts

#### - Get a contact by ID
Returns information about a single contact by its ID. The contact's unique ID is stored in a field called 'vid' which stands for 'visitor ID'.

| Parameter | Description | Required | Default |
| --------- | ----------- | :------: | :-----: |
| **property** | By default, you will get all properties that the contact has values for. If you include the "property" parameter, then the returned data will only include the property or properties that you request. You can include this parameter multiple times to specify multiple properties. The lastmodifieddate and associatedcompanyid will always be included, even if not specified. Keep in mind that only properties that have a value will be included in the response, even if specified in the URL. | No | - |
| **propertyMode** | One of “value_only” or “value_and_history” to specify if the current value for a property should be fetched, or the value and all the historical values for that property.  | No | value_and_history |
| **formSubmissionMode** | One of “all”, “none”, “newest”, “oldest” to specify which form submissions should be fetched. | No | all |
| **showListMemberships** | Indicate whether current list memberships should be fetched for the contact. | No | false |

**Usage:**
```javascript
api.contacts.getContactById(123456, {
  property: [
    'firstname', 'lastname', 'email',
  ],
  propertyMode: 'value_and_history',
  formSubmissionMode: 'all',
  showListMemberships: false,
})
.then(response => console.log(response.data))
.catch(error => console.error(error))
```

**Reference:** https://developers.hubspot.com/docs/methods/contacts/get_contact

#### - Get a contact by email address
Returns information about a single contact by its email address.

**Usage:**
```javascript
api.contacts.getContactByEmail('name@company.com', {
  property: [
    'firstname', 'lastname', 'email',
  ],
  propertyMode: 'value_and_history',
  formSubmissionMode: 'all',
  showListMemberships: false,
})
.then(response => console.log(response.data))
.catch(error => console.error(error))
```

**Reference:** https://developers.hubspot.com/docs/methods/contacts/get_contact_by_email

#### - Create a new contact
Create a new contact in HubSpot. Returns a 200 response on success. The response will include the details for the created contact.

If there is an existing contact with the email address included in the request, the response body will include the identityProfile details of the contact, which will include the vid of the existing record.

**Usage:**
```javascript
api.contacts.createContact({
  email: 'email@domain.com',
  firstname: 'James',
  lastname: 'Bond',
  website: 'http://www.mycompany.com',
  company: 'My Company',
  ...
})
.then(response => console.log(response.data.properties))
.catch(error => console.error(error))
```

**Reference:**
https://developers.hubspot.com/docs/methods/contacts/create_contact

#### - Update a contact by ID
Update an existing contact in HubSpot. This method lets you update the properties of a contact in HubSpot. You must pass the Contact's ID that you're updating as second parameter.

If the request succeeds, you'll get an HTTP 204 response, which represents that you have successfully updated the contact in the system. There will be no data in the response body.

**Usage:**
```javascript
api.contacts.updateContactById({
  email: 'new-email@domain.com',
  firstname: 'Jon',
  lastname: 'Doe',
  website: 'http://www.my-new-company.com',
  company: 'My Company 2',
  ...
}, 123456)
.then(response => console.log(response.status))
.catch(error => console.error(error))
```

**Reference:**
https://developers.hubspot.com/docs/methods/contacts/update_contact

#### - Update a contact by email
Update an existing contact in HubSpot, identified by email. This method lets you update the properties of a contact in HubSpot. You must pass the Contact's email that you're updating as second parameter.

If the request succeeds, you'll get an HTTP 204 response, which represents that you have successfully updated the contact in the system. There will be no data in the response body.

**Usage:**
```javascript
api.contacts.updateContactByEmail({
  firstname: 'Jon',
  lastname: 'Doe',
  website: 'http://www.my-new-company.com',
  company: 'My Company 2',
  ...
}, 'email@domain.com')
.then(response => console.log(response.status))
.catch(error => console.error(error))
```

**Reference:**
https://developers.hubspot.com/docs/methods/contacts/update_contact-by-email

#### - Create or update a contact
Create a contact if it doesn't exist already, or update it with the latest property values if it does.

This returns a 200 response on success. The response will contain a vid of the updated or created record, and an isNew field that indicates if a new record was created. If the field is false, an existing record was updated.

This will return a 409 Conflict error response if you are trying to update the email address of a record, and there is an existing record with the new email address.

**Usage:**
```javascript
api.contacts.createOrUpdateContact({
  firstname: 'Jon',
  lastname: 'Doe',
  website: 'http://www.my-new-company.com',
  company: 'My Company 2',
  ...
}, 'email@domain.com')
.then(response => console.log(response.status))
.catch(error => console.error(error))
```

**Reference:**
https://developers.hubspot.com/docs/methods/contacts/create_or_update

### Blog

#### - Get all blogs
List all of the blogs for a portal. Supports paging and filtering.

| Parameter | Description | Required | Default |
| --------- | ----------- | :------: | :-----: |
| **limit** | The number of items to return. | No | 20 |
| **offset** | The offset set to start returning rows from. | No | 0
| **created** | exact, range, gt, gte, lt, lte - When the post was first created, in milliseconds since the epoch. | No | - |
| **deleted_at** | exact, gt, gte - When the post was deleted, in milliseconds since the epoch. Zero if the blog post was never deleted. | No | - |
| **name** | exact, in - The internal name of the blog | No | - |

**Usage:**
```javascript
api.blog.getAllBlogs({
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

| Parameter | Description | Required | Default |
| --------- | ----------- | :------: | :-----: |
| **limit** | The number of items to return. | No | 20 |
| **offset** | The offset set to start returning rows from. | No | 0 |
| **archived** | Returns the posts that match the boolean lookup (e.g. archived=false returns all posts currently not archived). | No | false |
| **blog_author_id** | Returns the posts that match a particular blog author ID value. | No | - |
| **campaign** | Returns the posts that match the campaign guid. | No | - |
| **content_group_id** | Returns the posts that match the blog guid. The blog guid can be found in the blog dashboard URL (e.g. https://app.hubspot.com/blog/:portal_id/dashboard/:blog_guid). | No | - |
| **created** | Returns the posts that match a particular created time value. Supports exact, range, gt, gte, lt, lte lookups. | No | - |
| **deleted_at** | Returns the posts that match a particular deleted time value. Supports exact, gt, gte, lt, lte lookups. | No | - |
| **name** | Returns the posts that match the name value. Supports exact, contains, icontains, ne lookups. | No | - |
| **slug** | Returns the posts that match a particular slug value. | No | -
| **updated** | Returns the posts that match a particular updated time. Supports exact, range, gt, gte, lt, lte lookups. | No | - |
| **state** | DRAFT, PUBLISHED, or SCHEDULED. | No | PUBLISHED |
| **order_by** | Return the posts ordered by a particular field value. Blog posts can currently only be sorted by publish_date. Use a negative value to sort in descending order (e.g. order_by=-publish_date). | No | publish_date |

**Usage:**
```javascript
api.blog.getPosts({
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
api.blog.getPostById(3198892953)
.then(response => console.log(response.data))
.catch(error => console.error(error))
```

**Reference:**
http://developers.hubspot.com/docs/methods/blogv2/get_blog_posts_blog_post_id

### Deals

#### - Get all deals
Get all of the deals in a portal.  Returns a paginated set of deals.

In addition to the list of deals, each request will also return two values, *offset* and *hasMore*. If *hasMore* is *true*, you'll need to make another request, using the offset to get the next page of deal records.

| Parameter | Description |
| --------- | ----------- |
| **limit** | The number of records to return. Defaults to 100, has a maximum value of 250. |
| **offset** | Used to page through the results. If there are more records in your portal than the limit= parameter, you will need to use the offset returned in the first request to get the next set of results. |
| **properties** | Used to include specific deal properties in the results.  By default, the results will only include Deal ID and will not include the values for any properties for your Deals.  Including this parameter will include the data for the specified property in the results.  You can include this parameter multiple times to request multiple properties. Note: Deals that do not have a value set for a property will not include that property, even when you specify the property. A deal without a value for the dealname property would not show the dealname property in the results, even with &properties=dealname in the URL. |
| **propertiesWithHistory** | Works similarly to properties=, but this parameter will include the history for the specified property, instead of just including the current value. Use this parameter when you need the full history of changes to a property's value. |
| **includeAssociations** | If it's set to *true*, it will include the IDs of the associated contacts and companies in the results. This will also automatically include the *num_associated_contacts* property. |

**Usage:**
```javascript
api.deals.getAllDeals({
 limit: 100,
 offset: null,
 properties: [
   'hubspot_owner_id',
 ],
 propertiesWithHistory: 'dealname',
 includeAssociations: false,
})
.then(response => console.log(response.data.deals))
.catch(error => console.error(error))
```

**Reference:**
https://developers.hubspot.com/docs/methods/deals/get-all-deals

#### - Create a deal
This methods creates a deal on HubSpot. You can create associations between Deals and Contacts and Companies but it's not required.

The **dealstage** property is required when creating a deal. If the **pipeline** property is not specified, the default pipeline is assumed. However, it is recommended to always specify the pipeline, especially on portals with multiple pipelines.

Returns a 200 on success with the data for the newly created deal in the response.

You must pass an object to the method with these parameters:

| Parameter | Description |
| --------- | ----------- |
| Associated records | `"associations": {}` - A set of IDs for records that the new deal should be associated with. Deals can be associated with a single company (associatedCompanyIds) and any number of contacts (associatedVids). |
| Deal properties | `"properties": []` - A list of property names, and the value you want to set for the property. |

**Usage:**
```javascript
api.deals.createDeal({
  associations: {
    associatedCompanyIds: [
      123456
    ],
    associatedVids: [
      1234, 12345, 123456, ...
    ],
  },
  properties: {
    dealname: 'This is a brand new deal. Awesome!',
    hubspot_owner_id: 123456,
    amount: '50000',
    dealtype: 'newbusiness',
    dealstage: 'appointmentscheduled',
  },
})
.then(response => console.log(response.data))
.catch(error => console.error(error))
```

**Reference:**
https://developers.hubspot.com/docs/methods/deals/create_deal

## Disclaimer
This tool is under development and don't have all HubSpot API endpoints implemented yet.
