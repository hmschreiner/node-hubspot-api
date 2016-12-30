module.exports = (response) => {

  if (response.statusText === 'error') {
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx
    console.log(`
      ======> Error
      Message: ${response.body.message}
      Status: ${error.statusCode}
      headers: ${JSON.stringify(error.headers)}
    `)

    throw new Error(response.body.message)
  }

  return response
}
