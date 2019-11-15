'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}
//
// const onSignUpSuccess = () => {
//   onSuccess('You successfully signed up. Now, sign in.')
// }
//
// const onSignUpFailure = () => {
//   onFailure('Uh oh... something went wrong! Try again.')
// }
//
const startGameSuccess = responseData => {
  store.user = responseData.user
  onSuccess('You successfully started a game!')
  $('.after-start-game').show()
  $('.start-game').hide()
}
//

const startGameFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}
//
// const onChangePasswordSuccess = () => {
//   onSuccess('You successfully changed your password.')
// }
//
// const onChangePasswordFailure = () => {
//   onFailure('Uh oh... something went wrong! Try again.')
// }
//
// const onSignOutSuccess = () => {
//   onSuccess('You successfully signed out.')
//   // below, the store no longer knows who we are. delete the token.
//   store.user = {}
//   $('.before-auth').show()
//   $('.after-auth').hide()
// }
//
// const onSignOutFailure = () => {
//   onFailure('Uh oh... something went wrong! Try again.')
// }

module.exports = {
  startGameSuccess,
  startGameFailure
}
