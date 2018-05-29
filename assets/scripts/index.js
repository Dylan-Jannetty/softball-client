'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const navHandlebars = require('./templates/nav.handlebars')
const navHTML = navHandlebars()

// const homePageHandlebars = require('./templates/home-page.handlebars')
// const homePageHTML = homePageHandlebars()

const getAllTeamsHandlebars = require('./templates/getallteams.handlebars')
const getAllTeamsHTML = getAllTeamsHandlebars()

const authEvents = require('./auth/events')
const teamEvents = require('./team/teamevents')
$(() => {
  authEvents.addHandlers()
  teamEvents.addHandlers()
  $('body').prepend(navHTML)
  // $('body').append(homePageHTML)
  $('.container').append(getAllTeamsHTML)
})
