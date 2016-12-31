import errorHandler from '../helpers/errorHandler'

class Blog {

  constructor(api = null) {

    if (api === null) throw new Error('Request instance must be provided on constructor.')

    this.api = api
  }

  getAllBlogs(params) {

    return this.api.get('content/api/v2/blogs', { ...params })
      .then(response => response)
      .catch(error => errorHandler(error))
  }

  getPosts(params) {

    return this.api.get('content/api/v2/blog-posts', { ...params })
      .then(response => response)
      .catch(error => errorHandler(error))
  }

  getPostById(postId) {

    return this.api.get(`content/api/v2/blog-posts/${postId}`)
      .then(response => response)
      .catch(error => errorHandler(error))
  }
}

module.exports = Blog
