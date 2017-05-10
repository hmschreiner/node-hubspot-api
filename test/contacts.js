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
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.contacts).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })
  })

  describe('Create a contact', () => {

    let newContact = {
      email: Math.random().toString(36).substring(2,11) + '@domain.com',
      firstname: 'James',
      lastname: 'Bond',
      website: 'http://www.mycompany.com',
      company: 'My Company',
    }

    it('Should return the details of the new contact record', done => {

      api.contacts.createContact(newContact)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.properties).to.be.a('object')
          expect(response.data.properties.email.value).to.be.equal(newContact.email)
          expect(response.data.properties.firstname.value).to.be.equal(newContact.firstname)
          expect(response.data.properties.lastname.value).to.be.equal(newContact.lastname)
          expect(response.data.properties.website.value).to.be.equal(newContact.website)
          expect(response.data.properties.company.value).to.be.equal(newContact.company)
          done()
        })
        .catch(error => done(error))
    })
  })
})
