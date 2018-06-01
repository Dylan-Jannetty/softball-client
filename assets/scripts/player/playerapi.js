'use strict'
const config = require('../config')
const store = require('../store')

const createPlayer = function (formData) {
  // console.log(formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/players`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getPlayer = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/players`,
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

const deletePlayer = function (data) {
  console.log('This is deleteplayer:', data)
  return $.ajax({
    url: config.apiUrl + `/players/` + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlayer = (data) => {
  return $.ajax({
    url: config.apiUrl + `/players/` + store.user.player.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createPlayer,
  getPlayer,
  deletePlayer,
  updatePlayer
}
