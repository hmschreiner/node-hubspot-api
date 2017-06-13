module.exports = (error) => {

  if (error.response) {

      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || error.response.statusText)
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error)
    }
}
