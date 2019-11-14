'use strict'

const gameLogic = require('./win-lose-logic')

// const api = require('./api')
// const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

let currentPlayer = 'o'

// function that switches between players
const switchPlayer = () => {
  if (currentPlayer === 'o') {
    currentPlayer = 'x'
  } else {
    currentPlayer = 'o'
  }
}
// below will replace the index with the value
const moveToGameBoard = (index, value) => {
  gameLogic.gameBoard.splice(index, 1, value)
}

const onMakeMove = event => {
  event.preventDefault()

  switchPlayer()
  // if/else statement that checks for current player && that space is blank
  if ((currentPlayer === 'x') && ($(event.target).html() === '')) {
    $(event.target).text('x')
    // assigns id based on the ID of the div in HTML
    const id = event.target.id
    console.log(id)
    console.log(gameLogic.gameBoard)
    moveToGameBoard(id, currentPlayer)
    if (gameLogic.checkForWinner() === true) {
      $('span').text('player x wins!')
    }
    // if (gameLogic.checkForWinner() === true) {
    //   $('span').text('player x wins!')
    // }
    $('span').text("Player O's move")
    switchPlayer()
  } else if ((currentPlayer === 'o') && ($(event.target).html() === '')) {
    $(event.target).text('o')
    const id = event.target.id
    console.log(id)
    console.log(gameLogic.gameBoard)
    moveToGameBoard(id, currentPlayer)
    gameLogic.checkForWinner()
    // if (gameLogic.checkForWinner() === true) {
    //   $('span').text('player o wins!')
    // }
    $('span').text("Player X's move")
    switchPlayer()
  } else {
    $('span').text('You clicked this box already.')
  }
}

const addHandlers = event => {
  $('div').on('click', onMakeMove)
  $('div').on('click', switchPlayer)
}

module.exports = {
  addHandlers
}
