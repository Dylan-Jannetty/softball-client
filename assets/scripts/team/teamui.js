const homePageHandlebars = require('../templates/home-page.handlebars')
// const getAllTeamsHandlebars = require('../templates/getallteams.handlebars')
const store = require('../store')

const onGetTeamNoMessageSuccess = function (data) {
  data.teams.sort(function (a, b) {
    return b.win - a.win
  })
  // data.teams.sort(function (a, b) {
  //   return a.loss - b.loss
  // })

  let i = 1
  data.teams.forEach(function () {
    data.teams[i - 1].rank = i
    i++
  })
  const homePageHTML = homePageHandlebars({ teams: data.teams })
  $('.container').empty(homePageHTML)
  // $('.container').prepend(getAllTeamsHandlebars)
  $('.container').append(homePageHTML)
  $('form').trigger('reset')
}

const createTeamSuccess = function (data) {
  store.user.team = data.team
  console.log('in createTeamSuccess:', store.user)
  $('.nav-message').html(`<div class="alert alert-success" role="alert">You've succesfully created your team</div>`)
  $('.container').empty()
  // const homePageHTML = homePageHandlebars({teams: teams})
  $('.nav-message').css('text-align', 'center')
  $('.create-team').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000)
  $('.update-team-name').attr('value', store.user.team.name)
  $('.update-team-win').attr('value', store.user.team.win)
  $('.update-team-loss').attr('value', store.user.team.loss)

  if (store.user.team) {
    $('.nav-team').html(`<div>Team: ${store.user.team.name}</div>`)
  }
}

const createTeamFailure = function () {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">You already have a team!</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000
  )
}

const onGetTeamSuccess = function (data) {
  console.log(data)
  data.teams.sort(function (a, b) {
    return b.win - a.win
  })
  // data.teams.sort(function (a, b) {
  //   return a.loss - b.loss
  // })

  let i = 1
  data.teams.forEach(function () {
    data.teams[i - 1].rank = i
    i++
  })
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
  }, 3000)
}

const onGetTeamFailure = function (data) {
  $('#message').html(`<div class="alert alert-danger" role="alert">failed to get teams</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000)
}

const onGetTeamByIdSuccess = function (data) {
  // store.user = data.user
  $('#message').html(`<div class="alert alert-success" role="alert">Got team by id</div>`)
  $('#message').css('text-align', 'center')
  $('.container').empty()
  const teamsPlayerPageHandlebars = require('../templates/teams-player-page.handlebars')
  const teamsPlayerPageHTML = teamsPlayerPageHandlebars({ teams: data.team })
  $('.container').append(teamsPlayerPageHTML)
  // const createPlayerHandlebars = require('../templates/create-player.handlebars')
  // const createPlayerHTML = createPlayerHandlebars()

  setTimeout(() => {
    $('#message').html(``)
  }, 3000)
  // console.log('store.user!: ', data.user)
  // if (store.user) {
  //   console.log('store.user!: ', store.user)
  //   return $('.create-player-div').append(createPlayerHTML)
  // }
}

const onGetTeamByIdFailure = function (data) {
  $('#message').html(`<div class="alert alert-danger" role="alert">failed to get teams</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000)
}

const onDeleteTeamSuccess = function (data) {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">Your team has been deleted</div>`)
  $('.nav-message').css('text-align', 'center')
  setTimeout(() => {
    $('.nav-message').html(``)
  }, 3000)
  $('.container').empty()
  $('.nav-team').empty()
  $('.update-team').trigger('reset')
}

const onDeleteTeamFailure = function (data) {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">failed delete team</div>`)
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
  $('.update-team-name').attr('value', store.user.team.name)
  $('.update-team-win').attr('value', store.user.team.win)
  $('.update-team-loss').attr('value', store.user.team.loss)
  $('.nav-team').empty()
  $('.nav-team').html(`<div>Team: ${store.user.team.name}</div>`)
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
  onUpdateTeamFailure,
  onGetTeamNoMessageSuccess,
  onGetTeamByIdSuccess,
  onGetTeamByIdFailure
}
