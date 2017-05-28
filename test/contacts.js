import chai from 'chai'
import api from './setup'

let expect = chai.expect

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

  describe('Create or update a contact', () => {

    let newContact = {
      email: Math.random().toString(36).substring(2,11) + '@domain.com',
      firstname: 'James',
      lastname: 'Bond',
      website: 'http://www.mycompany.com',
      company: 'My Company',
    }

    let existingContact = {}

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

          // Save created contact ID
          existingContact.id = response.data.vid

          done()
        })
        .catch(error => done(error))
    })

    it('Should return the details of the updated contact record', done => {

      existingContact = {
        ...existingContact,
        firstname: 'Jon',
        lastname: 'Doe',
      }

      api.contacts.updateContact(existingContact, existingContact.id)
        .then(response => {
          expect(response.status).to.equal(204)
          done()
        })
        .catch(error => done(error))
    })
  })
})
