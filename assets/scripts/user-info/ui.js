'use strict'

const store = require('../store')

const messages = $('#user-message')

const onSuccess = message => {
  $('#user-message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  setTimeout(() => messages.html(''), 3000)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  setTimeout(() => messages.html(''), 3000)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('You successfully signed up. Now, sign in.')
}

const onSignUpFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('You successfully signed in.')
  $('.after-auth').show()
  $('.account-actions').hide()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('You successfully changed your password.')
}

const onChangePasswordFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onSignOutSuccess = () => {
  onSuccess('You successfully signed out.')
  // below, the store no longer knows who we are. delete the token.
  store.user = {}
  $('.before-auth').show()
  $('.after-auth').hide()
  $('#user-stats').text(' ')
  $('.after-start-game').hide()
  $('#game-message').text(' ')
  // console.log('everything is hidden')
}

const onSignOutFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
