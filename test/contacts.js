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

    let contactInfo = {
      email: Math.random().toString(36).substring(2,11) + '@domain.com',
      firstname: 'James',
      lastname: 'Bond',
      website: 'http://www.mycompany.com',
      company: 'My Company',
    }

    it('Should return new contact record', done => {

      api.contacts.createContact(contactInfo)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.properties).to.be.a('object')
          expect(response.data.properties.email.value).to.be.equal(contactInfo.email)
          expect(response.data.properties.firstname.value).to.be.equal(contactInfo.firstname)
          expect(response.data.properties.lastname.value).to.be.equal(contactInfo.lastname)
          expect(response.data.properties.website.value).to.be.equal(contactInfo.website)
          expect(response.data.properties.company.value).to.be.equal(contactInfo.company)

          // Save created contact ID
          contactInfo.id = response.data.vid

          done()
        })
        .catch(error => done(error))
    })

    it('Should return updated contact record by ID', done => {

      contactInfo = {
        ...contactInfo,
        firstname: 'Jon',
        lastname: 'Doe',
      }

      api.contacts.updateContactById(contactInfo, contactInfo.id)
        .then(response => {
          expect(response.status).to.equal(204)
          done()
        })
        .catch(error => done(error))
    })

    it('Should return updated contact record by email', done => {

      contactInfo = {
        ...contactInfo,
        firstname: 'Jon Update',
        lastname: 'Doe Update',
      }

      api.contacts.updateContactByEmail(contactInfo, contactInfo.email)
        .then(response => {
          expect(response.status).to.equal(204)
          done()
        })
        .catch(error => done(error))
    })

    it('Should return the created or updated contact record by email and indicates if a new contact was created', done => {

      api.contacts.createOrUpdateContact(contactInfo, contactInfo.email)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data.vid).to.be.a('number')
          expect(response.data.isNew).to.be.a('boolean')
          done()
        })
        .catch(error => done(error))

    })

  })
})
