const createTeamSuccess = function (data) {
  // console.log(data)``
  $('#message').html(`<div class="alert alert-success" role="alert">`)
  if (data.team.publicFile) {
  }
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#message').html(``)
  }, 3000
  )
}

module.exports = {
  createTeamSuccess
}
