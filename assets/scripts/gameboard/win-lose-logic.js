'use strict'

const gameBoard = ['', '', '', '', '', '', '', '', '']
//
// const moveToGameBoard = (index, value) => {
//   gameBoard.splice(index, 0, value)
// }

// ${events.currentPlayer} + ' wins!'

const checkForWinner = () => {
  if (gameBoard[0] === 'x' && gameBoard[1] && gameBoard[2] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[0] === 'x' && gameBoard[4] && gameBoard[8] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[0] === 'x' && gameBoard[3] && gameBoard[6] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[1] === 'x' && gameBoard[4] && gameBoard[7] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[2] === 'x' && gameBoard[4] && gameBoard[6] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[2] === 'x' && gameBoard[5] && gameBoard[8] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[3] === 'x' && gameBoard[4] && gameBoard[5] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[6] === 'x' && gameBoard[7] && gameBoard[8] === 'x') {
    console.log('Player X wins!')
  } else if (gameBoard[0] && gameBoard[1] && gameBoard[2] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[0] && gameBoard[4] && gameBoard[8] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[0] && gameBoard[3] && gameBoard[6] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[1] && gameBoard[4] && gameBoard[7] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[2] && gameBoard[4] && gameBoard[6] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[2] && gameBoard[5] && gameBoard[8] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[3] && gameBoard[4] && gameBoard[5] === 'o') {
    console.log('Player O wins!')
  } else if (gameBoard[6] && gameBoard[7] && gameBoard[8] === 'o') {
    console.log('Player O wins!')
  }
}

module.exports = {
  checkForWinner
}
