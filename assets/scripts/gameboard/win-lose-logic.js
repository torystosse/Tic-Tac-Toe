'use strict'

// const ui = require('./ui')
const store = require('../store')

// const gameBoard = ['', '', '', '', '', '', '', '', '']

const isTie = currentElement => {
  return currentElement !== ''
}

const tieGame = gameBoard => {
  if (gameBoard.every(isTie)) {
    // console.log("No one wins, it's a tie...")
    $('#user-message').text("No one wins, it's a tie...")
    store.game.over = true
  }
}

const checkForWinner = () => {
  const gameBoard = store.gameBoard
  if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
    // console.log('Player X wins!')
    $('#user-message').text('Player X wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
    // console.log('Player O wins!')
    $('#user-message').text('Player O wins!')
    // $('div').off('click')
    store.game.over = true
    // ui.restartGame()
  }
}

module.exports = {
  checkForWinner,
  tieGame
}
