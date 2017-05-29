import errorHandler from '../helpers/errorHandler'
import responseHandler from '../helpers/responseHandler'

const Deals = (api = null) => {

  if (api === null) throw new Error('Request instance must be provided on constructor.')

  return {
    createDeal(parameters) {

      let { properties, associations } = parameters

      let mappedProperties = Object.keys(properties).map(property => ({
         value: properties[property],
         name: property,
      }))

      return api.post('deals/v1/deal', {properties: [ ...mappedProperties ], associations})
        .then(response => responseHandler(response))
        .catch(error => errorHandler(error))
    },
  }
}

export default Deals
