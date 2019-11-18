'use strict'

const config = require('../config')
const store = require('../store')
// const gameLogic = require('./win-lose-logic')
// const events = require('./events')

const startGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
    //    data: formData
  })
}
//
// const signIn = formData => {
//   return $.ajax({
//     url: config.apiUrl + '/sign-in',
//     method: 'POST',
//     data: formData
//   })
// }
//
// below ... we need to get the id of the current game we're playing, store
// that ID, and use it for the URL
//
// gameData will be an object stored somewhere with:
// value, index, and over
// gameData: {
//
// }
//
// TO DO!!:
// - store the ID of the game that was just started
// - figure out gameData object
//
const updateGame = (id, currentPlayer) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: id,
          value: currentPlayer
        },
        over: false
      }
    }
  })
}

const showGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  startGame,
  updateGame,
  showGames
}
