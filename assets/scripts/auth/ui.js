'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000)
}

const signUpFailure = function () {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">You have failed to sign up!<br>Your username or email may be already registered.</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000
  )
}

const signInSuccess = function (data) {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">You have succesfully signed in!</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')

  $('.sign-in').empty()
  $('.sign-up').empty()

  const changePasswordHandlebars = require('../templates/change-password.handlebars')
  const changePasswordHTML = changePasswordHandlebars()
  $('.change-password-list').append(changePasswordHTML)

  const deleteTeamHandlebars = require('../templates/delete-team.handlebars')
  const deleteTeamHTML = deleteTeamHandlebars()
  $('.delete-team-list').append(deleteTeamHTML)

  const createTeamHandlebars = require('../templates/create-team.handlebars')
  const createTeamHTML = createTeamHandlebars()
  $('.create-team-list').append(createTeamHTML)

  const updateTeamHandlebars = require('../templates/update-team.handlebars')
  const updateTeamHTML = updateTeamHandlebars()
  $('.update-team-list').append(updateTeamHTML)

  const signOutUserHandlebars = require('../templates/sign-out.handlebars')
  const signOutUserHTML = signOutUserHandlebars()
  $('.sign-out-button').append(signOutUserHTML)

  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000
  )
  store.user = data.user
  console.log(store.user)
  if (store.user.team) {
    $('.update-team-name').val(store.user.team.name)
  }
  if (store.user.team) {
    $('.update-team-win').val(store.user.team.win)
  }
  if (store.user.team) {
    $('.update-team-loss').val(store.user.team.loss)
  }
  if (store.user.team) {
    $('.nav-team').html(`<div>Team: ${store.user.team.name}</div>`)
  }

  // $('.jumbotron').remove()
  // // console.log(store.user)
}

const signInFailure = function () {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000
  )
}

const changePasswordSuccess = function () {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">You have succesfully changed your password!</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000
  )
}

const changePasswordFailure = function () {
  $('.nav-message').html(`<div class="alert alert-danger" role="alert">Failed to change password</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000
  )
}
const signOutSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  $('.update-team').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000)
  $('.nav-team').empty()
  $('.sign-out-button').empty()
  $('.delete-team-list').empty()
  $('.update-team-list').empty()
  $('.create-team-list').empty()
  $('.change-password-list').empty()

  const signInHandlebars = require('../templates/sign-in.handlebars')
  const signInHTML = signInHandlebars()
  $('.sign-in-list').append(signInHTML)

  const signUpHandlebars = require('../templates/sign-up.handlebars')
  const signUpHTML = signUpHandlebars()
  $('.sign-up-list').append(signUpHTML)

  store.user = null
}
const signOutFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to sign out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
