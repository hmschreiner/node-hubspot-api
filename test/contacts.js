import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Contacts', () => {

  describe('Gets contacts', () => {

    it('Should return all contacts', () => {

      return api.contacts.getAll()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.contacts).to.be.a('array')
        })
    })

    // Get a existing contact for test
    let testContact = null

    before(() => {

        api.contacts.getAll({
          count: 1,
          property: [
            'email', 'firstname', 'lastname',
          ],
        })
          .then(response => response.data.contacts[0])
          .then(contactData => {
            testContact = contactData
          })
          .catch(error => {
            throw new Error(error)
          })
    })

    it('Should return a single contact, by ID', () => {

      let { firstname, lastname } = testContact.properties

      return api.contacts.getContactById(testContact.vid)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.vid).to.be.a('number')
          expect(response.data.properties.firstname.value).to.be.equal(firstname.value)
          expect(response.data.properties.lastname.value).to.be.equal(lastname.value)
        })
    })

    it('Should return a single contact, by email address', () => {

      let { firstname, lastname, email } = testContact.properties

      return api.contacts.getContactByEmail(email.value)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.vid).to.be.a('number')
          expect(response.data.properties.firstname.value).to.be.equal(firstname.value)
          expect(response.data.properties.lastname.value).to.be.equal(lastname.value)
          expect(response.data.properties.email.value).to.be.equal(email.value)
        })
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

    it('Should return new contact record', () => {

      return api.contacts.createContact(contactInfo)
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
        })
    })

    it('Should return updated contact record by ID', () => {

      contactInfo = {
        ...contactInfo,
        firstname: 'Jon',
        lastname: 'Doe',
      }

      return api.contacts.updateContactById(contactInfo, contactInfo.id)
        .then(response => {
          expect(response.status).to.equal(204)
        })
    })

    it('Should return updated contact record by email', () => {

      contactInfo = {
        ...contactInfo,
        firstname: 'Jon Update',
        lastname: 'Doe Update',
      }

      return api.contacts.updateContactByEmail(contactInfo, contactInfo.email)
        .then(response => {
          expect(response.status).to.equal(204)
        })
    })

    it('Should return the created or updated contact record by email and indicates if a new contact was created', () => {

      return api.contacts.createOrUpdateContact(contactInfo, contactInfo.email)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data.vid).to.be.a('number')
          expect(response.data.isNew).to.be.a('boolean')
        })
    })

  })
})
