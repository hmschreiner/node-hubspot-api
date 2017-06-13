import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Deals', () => {

  describe('Get deal', () => {

    it('Should return a list of all deals', done => {

      api.deals.getAllDeals()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.deals).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })

    it('Should return a list of all deals, limit by 50', done => {

      api.deals.getAllDeals({limit: 50})
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.deals.length).to.be.equal(50)
          expect(response.data.deals).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })

    it('Should return a list of all deals, including the IDs of the associated contacts and companies', done => {

      api.deals.getAllDeals({includeAssociations: true})
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.deals).to.be.a('array')
          expect(response.data.deals[0].associations).to.be.a('object')
          expect(response.data.deals[0].associations.associatedVids).to.be.a('array')
          expect(response.data.deals[0].associations.associatedCompanyIds).to.be.a('array')
          expect(parseInt(response.data.deals[0].properties.num_associated_contacts.value)).to.be.a('number')
          done()
        })
        .catch(error => done(error))
    })

  })

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
