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

const addHandlers = () => {
  $('body').on('submit', '.create-team', onCreateTeam)
  // $('body').on('submit', '.view-file', onGetFileUpload)
  // $('body').on('submit', '.update-file', onUpdateFileUpload)
  // $('body').on('submit', '.delete-file', onDeleteFileUpload)
  // $('body').on('submit', '.tab-content .delete-single-file', deleter)
  // $('body').on('click', '.tab-content .show-update', onShowUpdate)
}

module.exports = {
  addHandlers
  // onGetFileUploadNoEvent
}
