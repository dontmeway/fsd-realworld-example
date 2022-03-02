const commonENV = {
  PORT: 3000,
  PUBLIC_URL: '',
  SERVER_ENDPOINT: ""
}

module.exports = {
  dev: {
    ...commonENV,
  },
  prod: {
    ...commonENV,
  },
}
