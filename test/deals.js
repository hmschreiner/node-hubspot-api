import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Deals', () => {

  describe('Create a deal', () => {

    it('Should return the data for the newly created deal', done => {

      let dealInfo = {
        associations: {
          associatedCompanyIds: [], // Optional - companies association ID's
          associatedVids: [], // Optional - contacts association ID's
        },
        properties: {
          dealname: 'This is a brand new deal. Awesome!',
          hubspot_owner_id: '70', // demo user ID,
          amount: '50000',
          dealtype: 'newbusiness',
        },
      }

      api.deals.createDeal(dealInfo)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.properties.dealname.value).to.be.equal(dealInfo.properties.dealname)
          expect(response.data.properties.hubspot_owner_id.value).to.be.equal(dealInfo.properties.hubspot_owner_id)
          expect(response.data.properties.amount.value).to.be.equal(dealInfo.properties.amount)
          expect(response.data.properties.dealtype.value).to.be.equal(dealInfo.properties.dealtype)
          done()
        })
        .catch(error => done(error))
    })
  })
})
