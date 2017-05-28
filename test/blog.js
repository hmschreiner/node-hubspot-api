import chai from 'chai'
import api from './setup'

let expect = chai.expect

describe('Blog', () => {

  describe('Get blogs', () => {

    it('Should return all blogs', done => {

      api.blog.getAllBlogs(api)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.objects).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })
  })

  describe('Get blog posts', () => {

    let content_group_id = 351076997
    let blogPostId       = 3198892953

    it('Should return all blog posts', done => {

      api.blog.getPosts()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.objects).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })

    it(`Should return all posts from blog with content_group_id = ${content_group_id}`, done => {

      api.blog.getPosts({content_group_id})
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.objects).to.be.a('array')
          done()
        })
        .catch(error => done(error))
    })

    it(`Should return a blog post with blog_post_id = ${blogPostId}`, done => {

      api.blog.getPostById(blogPostId)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.data).to.be.a('object')
          expect(response.data.html_title).to.equal('Test Blog Post')
          done()
        })
        .catch(error => done(error))
    })
  })
})
