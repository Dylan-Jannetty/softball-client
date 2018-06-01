'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const navHandlebars = require('./templates/nav.handlebars')
const navHTML = navHandlebars()

// const footerHandlebars = require('./templates/footer.handlebars')
// const footerHTML = footerHandlebars()

// const homePageHandlebars = require('./templates/home-page.handlebars')
// const homePageHTML = homePageHandlebars()

// const getAllTeamsHandlebars = require('./templates/getallteams.handlebars')
// const getAllTeamsHTML = getAllTeamsHandlebars()
const authEvents = require('./auth/events')
const teamEvents = require('./team/teamevents')
const playerEvents = require('./player/playerevents')
$(() => {
  authEvents.addHandlers()
  teamEvents.addHandlers()
  playerEvents.addHandlers()
  $('body').prepend(navHTML)
  teamEvents.onLoadPageNoEvent()
  $('.sign-out-button').empty()
  $('.delete-team-list').empty()
  $('.update-team-list').empty()
  $('.create-team-list').empty()
  $('.change-password-list').empty()
  // $('body').append(footerHTML)
})
