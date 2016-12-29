module.exports = (error) => {

  if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(`
        ======> Error
        Message: ${error.response.statusMessage}
        Status: ${error.response.statusCode}
        headers: ${JSON.stringify(error.response.headers)}
      `)

      throw new Error(error.response.statusMessage)
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error)
    }
}
