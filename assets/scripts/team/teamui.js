const homePageHandlebars = require('../templates/home-page.handlebars')

const createTeamSuccess = function (data) {
  // console.log(data)``
  $('#message').html(`<div class="alert alert-success" role="alert">You've succesfully created your team</div>`)
  $('.all-teams').empty(homePageHandlebars)
  $('.all-teams').append(homePageHandlebars)
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
}

const onGetTeamSuccess = function (data) {
  console.log(data)
  const homePageHTML = homePageHandlebars({ teams: data.teams })
  $('body').append(homePageHTML)
  $('#message').html(`<div class="alert alert-success" role="alert">Here are all the teams</div>`)
}

module.exports = {
  createTeamSuccess,
  createTeamFailure,
  onGetTeamSuccess
}
