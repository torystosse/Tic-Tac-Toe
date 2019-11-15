'use strict'

// use require with a reference to bundle the file and use it in this file
const gameEvents = require('./gameboard/events')
const userEvents = require('./user-info/events')
// const userEvents = require('./user-info/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// below is a shortcut for document.ready
// wait for index.html to load completely before running any javascript

$(() => {
  gameEvents.addHandlers()
  userEvents.addHandlers()
})
