'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./teamui')
const api = require('./teamapi')

const onCreateTeam = function (event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  console.log('form data in submit is: ', formData)
  for (const key of formData.keys()) {
    console.log(key)
  }
  api.createTeam(formData)
    .then(ui.createTeamSuccess)
    .catch(ui.createTeamFailure)
}

const onGetTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getTeam(data)
    .then(ui.onGetTeamSuccess)
    .catch()
}

const addHandlers = () => {
  $('body').on('submit', '.create-team', onCreateTeam)
  $('body').on('click', '.get-teams', onGetTeam)
}

module.exports = {
  addHandlers
  // onGetFileUploadNoEvent
}
