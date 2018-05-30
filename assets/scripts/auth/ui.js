'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('.nav-message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up</div>`)
  $('.nav-message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.nav-message').html('')
  }, 3000)
  // $('.dropdown-menu').append('.change-password')
  // $('.dropdown-menu').append('.delete-team')
  // $('.dropdown-menu').append('.create-team')
  // $('.dropdown-menu').append('.update-team')
  // $('.dropdown-menu').append('.sign-out')
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

  //

  // const navHandlebars = require('./templates/nav.handlebars')
  // const navHTML = navHandlebars()
  // $('.nav').remove()
  // const signedInNavHandlebars = require('./templates/signed-in-nav.handlebars')
  // const signedInNavHTML = signedInNavHandlebars()
  // $('body').prepend(signedInNavHTML)
  // $('.sign-in').remove()
  // $('.sign-up').remove()

  // const changePasswordHandlebars = require('../templates/change-password.handlebars')
  // const changePasswordHTML = changePasswordHandlebars()
  // $('.change-password').append(changePasswordHTML)
  //
  // const deleteTeamHandlebars = require('../templates/delete-team.handlebars')
  // const deleteTeamHTML = deleteTeamHandlebars()
  // $('.delete-team').append(deleteTeamHTML)
  //
  // const createTeamHandlebars = require('../templates/create-team.handlebars')
  // const createTeamHTML = createTeamHandlebars()
  // $('.create-team').append(createTeamHTML)
  //
  // const updateTeamHandlebars = require('../templates/update-team.handlebars')
  // const updateTeamHTML = updateTeamHandlebars()
  // $('.update-team').append(updateTeamHTML)
  //
  // const signOutUserHandlebars = require('../templates/sign-out.handlebars')
  // const signOutUserHTML = signOutUserHandlebars()
  // $('.sign-out').append(signOutUserHTML)

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
