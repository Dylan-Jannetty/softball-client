// const homePageHandlebars = require('../templates/home-page.handlebars')
// const getAllTeamsHandlebars = require('../templates/getallteams.handlebars')
const store = require('../store')

const onGetPlayerNoMessageSuccess = function (data) {
  const teamsPlayerPageHandlebars = require('../templates/teams-player-page.handlebars')
  const teamPlayers = data.players.filter((p) => {
    return p.team_id === +store.currentTeamId
  })
  console.log('teamPlayers:', teamPlayers)
  const teamsPlayerPageHTML = teamsPlayerPageHandlebars({ players: teamPlayers })
  $('.container').empty()

  $('.container').append(teamsPlayerPageHTML)
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000)
  console.log('ongetplayer', data)
}

const createPlayerSuccess = function (data) {
  store.user.player = data.player
  $('#message').html(`<div class="alert alert-success" role="alert">You've succesfully created your player</div>`)
  // $('.container').empty()
  // const homePageHTML = homePageHandlebars({teams: teams})
  $('#message').css('text-align', 'center')
  $('.create-player').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000)
}

const createPlayerFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Couldn't create player!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

const onGetPlayerSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert"></div>`)
  $('#message').css('text-align', 'center')
  const teamsPlayerPageHandlebars = require('../templates/teams-player-page.handlebars')
  const teamPlayers = data.players.filter((p) => {
    return p.team_id === +store.currentTeamId
  })
  console.log('teamPlayers:', teamPlayers)
  const teamsPlayerPageHTML = teamsPlayerPageHandlebars({ players: teamPlayers })
  $('.container').empty()

  $('.container').append(teamsPlayerPageHTML)
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000)
  console.log('ongetplayer', data)
}

const onGetPlayerFailure = function (data) {
  $('#message').html(`<div class="alert alert-danger" role="alert">failed to get teams</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const onDeletePlayerSuccess = function (data) {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">Your team has been deleted</div>`)
  $('.nav-message').css('text-align', 'center')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000)
  $('.container').empty()
  $('.nav-team').empty()
  $('.update-team').trigger('reset')
}

const onDeletePlayerFailure = function (data) {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">failed delete team</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

const onUpdatePlayerSuccess = function (data) {
  store.user.player = data.player
  $('.nav-message').html(`<div class="alert alert-success" role="alert">Your Team has been updated</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000)
  // $('.update-team-name').attr('value', store.user.team.name)
  // $('.update-team-win').attr('value', store.user.team.win)
  // $('.update-team-loss').attr('value', store.user.team.loss)
}

const onUpdatePlayerFailure = function (data) {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">There was a problem updating your team</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

module.exports = {
  createPlayerSuccess,
  createPlayerFailure,
  onGetPlayerSuccess,
  onGetPlayerFailure,
  onDeletePlayerSuccess,
  onDeletePlayerFailure,
  onUpdatePlayerSuccess,
  onUpdatePlayerFailure,
  onGetPlayerNoMessageSuccess
}
