import errorHandler from '../helpers/errorHandler'
import responseHandler from '../helpers/responseHandler'

const Contacts = (api = null) => {

  if (api === null) throw new Error('Request instance must be provided on constructor.')

  return {
    mapProperties(properties) {

      return Object.keys(properties).map(property => ({
  	     property: property,
         value: properties[property],
      }))
    },
    getAll(params) {

      let defaultParams = {
        count: null,
        vidOffset: null,
        ...params
      }

      return api.get('contacts/v1/lists/all/contacts/all', defaultParams)
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    getContactById(id, parameters = {}) {

      return api.get(`contacts/v1/contact/vid/${id}/profile`, parameters)
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    getContactByEmail(email, parameters = {}) {

      return api.get(`contacts/v1/contact/email/${email}/profile`, parameters)
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    createContact(properties) {

      let mappedProperties = this.mapProperties(properties)

      return api.post('contacts/v1/contact', {properties: [ ...mappedProperties ]})
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    updateContactById(properties, id) {

      let mappedProperties = this.mapProperties(properties)

      return api.post(`contacts/v1/contact/vid/${id}/profile`, {properties: [ ...mappedProperties ]})
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    updateContactByEmail(properties, email) {

      let mappedProperties = this.mapProperties(properties)

      return api.post(`contacts/v1/contact/email/${email}/profile`, {properties: [ ...mappedProperties ]})
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
    createOrUpdateContact(properties, email) {

      let mappedProperties = this.mapProperties(properties)

      return api.post(`contacts/v1/contact/createOrUpdate/email/${email}`, {properties: [ ...mappedProperties ]})
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))

    },
  }
}

export default Contacts
