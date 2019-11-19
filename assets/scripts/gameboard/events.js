'use strict'

const gameLogic = require('./win-lose-logic')

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')

let currentPlayer = 'x'

// function that switches between players
const switchPlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
    $('#game-message').text("Player X's move")
    // console.log('player os move')
  } else {
    currentPlayer = 'o'
    $('#game-message').text("Player O's move")
    // console.log('player xs move')
  }
}
// below will replace the index with the value
const moveToGameBoard = (index, value) => {
  store.gameBoard.splice(index, 1, value)
}

const onMakeMove = event => {
  event.preventDefault()
  if (store.game.over === false) {
    const id = event.target.id
    // switchPlayer()
    moveToGameBoard(id, currentPlayer)
    api.updateGame(id, currentPlayer)
    // if/else statement that checks for current player && that space is blank
    if ((currentPlayer === 'x') && ($(event.target).html() === '')) {
      $(event.target).text('x')
      // assigns id based on the ID of the div in HTML
      // console.log(store.gameBoard)
      gameLogic.checkForWinner()
      gameLogic.tieGame(store.gameBoard)
      switchPlayer()
    } else if ((currentPlayer === 'o') && ($(event.target).html() === '')) {
      $(event.target).text('o')
      // console.log(store.gameBoard)
      gameLogic.checkForWinner()
      gameLogic.tieGame(store.gameBoard)
      switchPlayer()
    } else {
      $('#game-message').text('You clicked this box already.')
    }
  } else {
    $('#game-message').text('Game is over.')
  }
}

const onStartGame = event => {
  event.preventDefault()

  currentPlayer = 'x'
  store.gameOver = false
  store.gameBoard = ['', '', '', '', '', '', '', '', '']

  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

// const onRestartGame = event => {
//   event.preventDefault()
//
//   api.startGame()
//     .then(ui.restartGameSuccess)
//     .catch(ui.restartGameFailure)
//
//   store.gameboard = ['', '', '', '', '', '', '', '', '']
//   $('div').html(' ')
//   $('.message').replaceWith(' ')
// }

const onShowGames = event => {
  event.preventDefault()

  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesFailure)
}

const addHandlers = event => {
  $('.box').on('click', onMakeMove)
  // $('div').on('click', switchPlayer)
  $('.start-game').on('click', onStartGame)
  // $('.after-end-game').on('click', onRestartGame)
  $('#get-all-games').on('submit', onShowGames)
}

module.exports = {
  addHandlers
  // onRestartGame
}
