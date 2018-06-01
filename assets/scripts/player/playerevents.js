'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./playerui')
const api = require('./playerapi')
const store = require('../store')

const onCreatePlayer = function (event) {
  // store.user.team.id = store.user.player
  event.preventDefault()
  const formData = getFormFields(event.target)
  formData.player.team_id = store.user.team.id
  api.createPlayer(formData)
    .then(ui.createPlayerSuccess)
    .catch(ui.createPlayerFailure)
    .then(() => { onGetPlayerNoEvent() })
}

const onGetPlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getPlayer(data)
    .then(ui.onGetPlayerSuccess)
    .catch(ui.onGetPlayerFailure)
    .then(() => { onGetPlayerNoEvent() })
}

const onGetPlayerNoEvent = () => {
  // const data = getFormFields(event.target)
  api.getPlayer()
    .then(ui.onGetPlayerNoMessageSuccess)

    // .catch(ui.)
}

const onLoadPageNoEvent = () => {
  // const data = getFormFields(event.target)
  api.getPlayer()
    .then(ui.onGetPlayerSuccess)

    // .catch(ui.)
}

const onDeletePlayer = (event) => {
  event.preventDefault()
  // const data = $(event.target).attr('data-player-id')
  const id = $(event.target).children().attr('data-id')
  const data = {players: { id: $(event.target).children().attr('data-id') }}
  console.log('event.target is : ', event.target)
  // console.log('ondeleteplayer: ', store.team.players.id)
  // data.player.team_id = store.team.players.id
  // console.log(data)
  api.deletePlayer(data)
    .then(ui.onDeletePlayerSuccess)
    .catch(ui.onDeletePlayerFailure)
    .then(() => {
      $('#' + id).fadeOut()
      $('#' + id + '-all').fadeOut()
    })
    .then(() => {
      $('#' + id).remove()
      $('#' + id + '-all').remove()
    })
    .then(() => { onGetPlayerNoEvent() })
}

const onUpdatePlayer = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTeam(data)
    .then(ui.onUpdatePlayerSuccess)
    .catch(ui.onUpdatePlayerFailure)
    .then(() => { onGetPlayerNoEvent() })
}

const addHandlers = () => {
  $('body').on('submit', '.create-player', onCreatePlayer)
  $('body').on('click', '.get-players', onGetPlayer)
  $('body').on('click', '.delete-player', onDeletePlayer)
  $('body').on('submit', '.update-player', onUpdatePlayer)

  // $('body').on('submit', '.team-ranks .delete-your-team', deleter)
}

module.exports = {
  addHandlers,
  onGetPlayerNoEvent,
  onLoadPageNoEvent
}
