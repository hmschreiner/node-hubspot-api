import errorHandler from '../helpers/errorHandler'
import responseHandler from '../helpers/responseHandler'

class Contacts {

  constructor(api = null) {

    if (api === null) throw new Error('Request instance must be provided on constructor.')

    this.api = api
  }

  getAll(params) {

    let defaultParams = {
      count: null,
      vidOffset: null,
      ...params
    }

    return this.api.get('contacts/v1/lists/all/contacts/all', defaultParams)
      .then(response => responseHandler(response))
      .catch(error => errorHandler(error))
  }

  createContact(properties) {

    let mappedProperties = Object.keys(properties).map((property) => ({
	     property: property,
       value: properties[property],
    }))

    return this.api.post('contacts/v1/contact', {properties: [ ...mappedProperties ]})
      .then(response => responseHandler(response))
      .catch(error => errorHandler(error))
  }
}

export default Contacts
