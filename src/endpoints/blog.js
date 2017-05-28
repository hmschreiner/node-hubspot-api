import errorHandler from '../helpers/errorHandler'

const Blog = (api = null) => {

  if (api === null) throw new Error('Request instance must be provided on constructor.')

  return {
    getAllBlogs(params) {

      return api.get('content/api/v2/blogs', { ...params })
        .then(response => response)
        .catch(error => errorHandler(error))
    },
    getPosts(params) {

      return api.get('content/api/v2/blog-posts', { ...params })
        .then(response => response)
        .catch(error => errorHandler(error))
    },
    getPostById(postId) {

      return api.get(`content/api/v2/blog-posts/${postId}`)
        .then(response => response)
        .catch(error => errorHandler(error))
    },
  }
}

module.exports = Blog
