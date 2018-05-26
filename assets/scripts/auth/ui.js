'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed up</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signUpFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed to sign up!<br>Your username or email may be already registered.</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const signInSuccess = function (data) {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  $('.modal').modal('hide')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )

  store.user = data.user
  // const createFileUploadHandlebars = require('../templates/file-upload/create-file.handlebars')
  // const createFileUploadHTML = createFileUploadHandlebars()
  //
  // const updateFileUploadHandlebars = require('../templates/file-upload/update-file.handlebars')
  // const updateFileUploadHTML = updateFileUploadHandlebars()

  // const viewFileUploadHandlebars = require('../templates/file-upload/view-file.handlebars')
  // const viewFileUploadHTML = viewFileUploadHandlebars()
  //
  // const deleteFileUploadHandlebars = require('../templates/file-upload/delete-file.handlebars')
  // const deleteFileUploadHTML = deleteFileUploadHandlebars()

  // const navHandlebars = require('../templates/nav.handlebars')
  // const navHTML = navHandlebars({username: store.user.username})

  // const scrollFileHandlebars = require('../templates/scrollfile.handlebars')
  // const scrollFileHTML = scrollFileHandlebars()

  // const containerHandlebars = require('../templates/container.handlebars')
  // const containerHTML = containerHandlebars()

  // $('body').on('click', '.file-tabs a', function (e) {
  //   e.preventDefault()
  //   $(this).tab('show')
  // })

  const signOutUserHandlebars = require('../templates/sign-out.handlebars')
  const signOutUserHTML = signOutUserHandlebars()

  $('body').append(signOutUserHTML)
  // $('.jumbotron').remove()
  // // console.log(store.user)
}

const signInFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully changed your password!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordFailure = function () {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to change password</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signOutSuccess = function () {
  $('#message').html(`<div class="alert alert-success" role="alert">You have succesfully signed out!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = null
  // $('.create-file').remove()
  // $('.update-file').remove()
  // $('.view-file').remove()
  // $('.delete-file').remove()
  // $('.change-password').remove()
  // $('.navbar').remove()
  // $('.scrollable').remove()
  // $('.container').remove()

  // const homePageHandlebars = require('../templates/homepage.handlebars')
  // const homePageHTML = homePageHandlebars()

  // $('body').append(homePageHTML)
  // // console.log('u signed out')
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
