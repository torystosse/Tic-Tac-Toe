'use strict'

// const gameLogic = require('./win-lose-logic')

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
// id = event.target.id
// const moveToGameBoard = (index, value) => {
//   gameBoard.splice(index, 0, value)
// }

const onMakeMove = event => {
  event.preventDefault()

  switchPlayer()
  // if/else statement that checks for current player && that space is blank
  if ((currentPlayer === 'x') && ($(event.target).html() === '')) {
    $(event.target).text('x')
    // currentPlayer.push(gameBoard)
    $('span').text("Player O's move")
    switchPlayer()
  } else if ((currentPlayer === 'o') && ($(event.target).html() === '')) {
    $(event.target).text('o')
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
