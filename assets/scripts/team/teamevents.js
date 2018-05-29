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
    .then(() => { onGetTeamNoEvent() })
}

const onGetTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getTeam(data)
    .then(ui.onGetTeamSuccess)
    .catch(ui.onGetTeamFailure)
}

const onGetTeamNoEvent = () => {
  // const data = getFormFields(event.target)
  api.getTeam()
    .then(ui.onGetTeamSuccess)

    // .catch(ui.)
}

const onDeleteTeam = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.deleteTeam(data)
    .then(ui.onDeleteTeamSuccess)
    .catch(ui.onDeleteTeamFailure)
    .then(() => { onGetTeamNoEvent() })
}

// const deleter = (e) => {
//   e.preventDefault()
//   // console.log('delete ')
//   const id = $(e.target).children().attr('data-id')
//   const data = {getallteams: { id: $(e.target).children().attr('data-id') }}
//   // console.log('item to delete has id of', data)
//   api.deleteTeam(data)
//     .then(ui.onDeleteTeamSuccess)
//     .then(() => {
//       $('#' + id).fadeOut()
//       $('#' + id + '-all').fadeOut()
//     })
//     .then(() => {
//       $('#' + id).remove()
//       $('#' + id + '-all').remove()
//     })
// }

const addHandlers = () => {
  $('body').on('submit', '.create-team', onCreateTeam)
  $('body').on('click', '.get-teams', onGetTeam)
  $('body').on('submit', '.delete-team', onDeleteTeam)
  // $('body').on('submit', '.team-ranks .delete-your-team', deleter)
}

module.exports = {
  addHandlers,
  onGetTeamNoEvent
}
