'use strict'

const config = require('../config')
const store = require('../store')

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
// const changePassword = formData => {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }
//
// const signOut = () => {
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  startGame
}
