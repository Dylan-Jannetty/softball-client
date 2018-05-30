const homePageHandlebars = require('../templates/home-page.handlebars')
// const getAllTeamsHandlebars = require('../templates/getallteams.handlebars')
const store = require('../store')

const createTeamSuccess = function (data) {
  store.user.team = data.team
  // console.log(data)``
  $('.nav-message').html(`<div class="alert alert-success" role="alert">You've succesfully created your team</div>`)
  $('.container').empty(homePageHandlebars)
  // const homePageHTML = homePageHandlebars({teams: teams})
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
  $('.nav-team').append(data.team.name)
}

const createTeamFailure = function () {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">You've failed to create a team</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

const onGetTeamSuccess = function (data) {
  console.log(data)
  const homePageHTML = homePageHandlebars({ teams: data.teams })
  $('.container').empty(homePageHTML)
  // $('.container').prepend(getAllTeamsHandlebars)
  $('.container').append(homePageHTML)
  $('#message').html(`<div class="alert alert-success" role="alert">Welcome! These are the standings for the league!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const onGetTeamFailure = function (data) {
  $('#message').html(`<div class="alert alert-danger" role="alert">failed to get teams</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const onDeleteTeamSuccess = function (data) {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">Your team has been deleted</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
  $('.container').empty(homePageHandlebars)
}

const onDeleteTeamFailure = function (data) {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">failed delete teams</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

const onUpdateTeamSuccess = function (data) {
  store.user.team = data.team
  $('.nav-message').html(`<div class="alert alert-success" role="alert">Your Team has been updated</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
  $('.container').empty(homePageHandlebars)
}

const onUpdateTeamFailure = function (data) {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">There was a problem updating your team</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

module.exports = {
  createTeamSuccess,
  createTeamFailure,
  onGetTeamSuccess,
  onGetTeamFailure,
  onDeleteTeamSuccess,
  onDeleteTeamFailure,
  onUpdateTeamSuccess,
  onUpdateTeamFailure
}
