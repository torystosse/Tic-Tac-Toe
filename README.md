[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe

A Tic-Tac-Toe SPA.

## The Game

Tic-Tac-Toe is a SPA that allows the user to create an account, sign in, and play
the game. In order to play the game, the user does have to sign into their newly
created account, and once "Start Game" is clicked, then the game board will
appear. Other user functionalities include: changing their password, retrieving
the number of games they have played, and signing out, all of which have messaging,
alerting the user whether their request was successful or not. Upon signing out,
the game board will disappear.

To play the game, click "Start Game", and upon clicking a space on the gameboard,
the first mark will be an "X". The game alternates between "X" and "O", with
messaging alerting the user to whose turn is next, and a winner will be declared
once the user gets three of the same mark in a row. Once a winner has been declared,
a message alerting who has won will appear, and the user will be unable to continue
to add marks to the game board. In the event of a tie, the user will be alerted
that no one has one, and they are free to start a new game. Clicking "Start Game"
after having played a game will clear the board, and the user can play a new game.


## Background

### The Planning

My planning was aggressive, but realistic. I began by taking a recommended schedule,
still planning on following it, but putting aside what I would accomplish on each
day, and making sure I would meet that daily goal, but ideally exceed it. Wireframes
and User Stories were the first things to accomplish, and they had to be enough to
meet MVP, but not too much that I would focus on unnecessary, though nice to have,
details. The goal was MVP, and if time allowed, as we only had four days, then
those extra details would be added.


### The Process & Problem Solving

I worked step by step, tackling creating the game board first (but trying not to
dive down a CSS rabbithole), making the gameboard interactive, and then creating
the game logic. The game logic was my first real issue to tackle, and encountered
multiple issues, such as making sure the player was switching correctly (and
aligning with the mark being placed on the board), and once a winner was found,
not allowing the game to continue to be played. Talking through what I was trying
to accomplish with my peers, and putting our brains together (plus utilizing Google/
the jQuery docs), helped to overcome the problems. Initially, I used the `.off()`
method to turn off the click handlers that would add the mark to the board, but
later on in the development process, removed that, in finding that I was having
trouble turning the click handler "back on" correctly, when the user would restart
a new game. I utilized booleans to allow the user to play again, once starting
a new game.

One of my big hurdles to overcome was the update game API. I encountered a number
of issues with this, such as correctly storing the game's ID to allow it to be
updates, and then finding a way to update the JS representation of the game board
in the API. I broke it down, piece by piece, and wrote some pseudo code to start
thinking about exactly what I was trying to accomplish. This allowed me to get
my thoughts going in the right direction, and to tackle one small problem at a
time. In asking for help, it allowed me to piece together everything, and fill
in the small pieces I was missing.



### Remaining Unsolved Problems

Some minor things I would like to resolve are:
* Removing the "You successfully logged in" once a user begins to play game.
* Having the "Game Over" messaging appear sooner.
* Make the 'X''s and 'O''s centered on the board.
* Add at least one feature, like playing against a computer.


### Technologies Used

1. HTML
2. CSS
3. JavaScript
4. jQuery
5. AJAX

### Wireframes & User Stories

![Wireframe 1](https://i.imgur.com/5P2ov5D.jpg)
![Wireframe 2](https://imgur.com/r1eE4gs)
![Wireframe 3](https://i.imgur.com/07CafCo.jpg)

#### User Stories:

```
- As an unregistered user, I would like to sign up with email, password, and password confirmation
    - If email is already taken, I want to receive an error message
    - If PW & PW confirmation don’t match, I want to receive an error message
    - If email is new, and PW & PW confirmation match, then I want to receive a success message
- As a logged in user, I would like to see the options to sign out, change my password, see how many games I have played, and have an option to start a new game
- As a logged in user, I would like to be able to change my password with my old password and create a new password
    - If old password is incorrect, I want to receive an error message
    - If new password is the same as old password, I want to receive an error message
    - If old password is correct, and new password is a new password, I want to receive a success message
- As a logged in user, I would like to play the game by clicking a start game button
    - By clicking this button, the game board should appear
    - A successful start game should allow player X to select the first move
    - The moves should rotate between X and O
    - I should receive an error message if I try to choose the same spot twice
    - If a player gets 3 matching spots in a row horizontally, vertically, or diagonally, the display should say winner
    - If no players get 3 matching spots in a row horizontally, vertically, or diagonally, the display should say tie
```


## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
