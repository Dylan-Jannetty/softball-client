const homePageHandlebars = require('../templates/home-page.handlebars')
const getAllTeamsHandlebars = require('../templates/getallteams.handlebars')
const store = require('../store')

const createTeamSuccess = function (data) {
  store.user.team = data.team
  // console.log(data)``
  $('#message').html(`<div class="alert alert-success" role="alert">You've succesfully created your team</div>`)
  $('.container').empty(homePageHandlebars)
  $('.container').prepend(getAllTeamsHandlebars)
  $('.container').append(homePageHandlebars)
  // const homePageHTML = homePageHandlebars({teams: teams})
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const createTeamFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You've failed to create a team</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

const onGetTeamSuccess = function (data) {
  console.log(data)
  const homePageHTML = homePageHandlebars({ teams: data.teams })
  $('.container').empty(homePageHTML)
  $('.container').prepend(getAllTeamsHandlebars)
  $('.container').append(homePageHTML)
  $('#message').html(`<div class="alert alert-success" role="alert">Here are all the teams</div>`)
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
  $('#message').html(`<div class="alert alert-danger" role="alert">failed to get teams</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
  $('.container').empty(homePageHandlebars)
  $('.container').prepend(getAllTeamsHandlebars)
  $('.container').append(homePageHandlebars)
}

const onDeleteTeamFailure = function (data) {
  $('#message').html(`<div class="alert alert-danger" role="alert">failed delete teams</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

module.exports = {
  createTeamSuccess,
  createTeamFailure,
  onGetTeamSuccess,
  onGetTeamFailure,
  onDeleteTeamSuccess,
  onDeleteTeamFailure
}
