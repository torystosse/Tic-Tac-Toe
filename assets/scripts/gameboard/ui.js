'use strict'

const store = require('../store')
// const events = require('./events')

const onSuccess = message => {
  $('#user-message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const startGameSuccess = responseData => {
  store.game = responseData.game
  $('div').html('')
  $('.message').replaceWith(' ')
  onSuccess('You successfully started a game!')
  $('.after-start-game').show()

  // $('.start-game').hide()
  // console.log('responseData is', responseData)
}
//

const startGameFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

// const restartGame = () => {
//   $('.after-end-game').show()
// }

const restartGameSuccess = () => {
  $('div').html(' ')
  $('.message').replaceWith(' ')
  $('.start-game').show()
  $('.after-end.game').hide()
}

const restartGameFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  // restartGame,
  restartGameSuccess,
  restartGameFailure
}
