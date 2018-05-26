'use strict'

let apiUrl
const apiUrls = {
  production: 'https://dashboard.heroku.com/apps/calm-garden-62361',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
