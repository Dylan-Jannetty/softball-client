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

const getTeam = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/teams`,
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

const getTeamById = function (data) {
  console.log('data in api', data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/teams/` + data,
    headers: {
      contentType: 'application/json'
    }
  })
}

const deleteTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + `/teams/` + store.user.team.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateTeam = (data) => {
  return $.ajax({
    url: config.apiUrl + `/teams/` + store.user.team.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createTeam,
  getTeam,
  deleteTeam,
  updateTeam,
  getTeamById
}
