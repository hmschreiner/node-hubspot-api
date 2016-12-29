import chai from 'chai'
import NodeHubspotApi from '../src'
import { apiKey } from './config'

let expect = chai.expect

const api = new NodeHubspotApi(apiKey)

describe('Contacts', () => {

  describe('Get All contacts', () => {

    it('Should return all contacts', done => {

      api.contacts.getAll()
        .then(response => {
          expect(response.statusCode).to.equal(200)
          expect(response.body).to.be.a('object')
          expect(response.body.contacts).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })
  })
})
