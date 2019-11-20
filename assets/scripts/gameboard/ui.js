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
  $('.box').html('').css('background', '#e6f2ff')
  $('#game-message').text(' ')
  onSuccess('You successfully started a game!')
  $('.after-start-game').show()
  $('#user-stats').hide()
  // $('#user-message').hide()

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
  $('.box').html(' ')
  $('.message').replaceWith(' ')
  $('.start-game').show()
  $('.after-end.game').hide()
}

const restartGameFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onShowGamesSuccess = response => {
  const games = response.games.length

  $('#user-stats').text(games)
  $('#user-stats').show()
}

const onShowGamesFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  // restartGame,
  restartGameSuccess,
  restartGameFailure,
  onShowGamesSuccess,
  onShowGamesFailure
}
