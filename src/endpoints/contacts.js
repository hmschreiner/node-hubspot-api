import errorHandler from '../helpers/errorHandler'

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
      .then(response => response)
      .catch(error => errorHandler(error))
  }
}

export default Contacts
