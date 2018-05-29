'use strict'
const config = require('../config')
const store = require('../store')

const createTeam = function (formData) {
  // console.log(formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/teams`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    contentType: false,
    processData: false
  })
}

module.exports = {
  createTeam
}
