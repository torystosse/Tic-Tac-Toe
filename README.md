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



### Problem Solving



### Remaining Unsolved Problems



### Technologies Used

1. HTML
2. CSS
3. JavaScript
4. jQuery
5. AJAX

### Wireframes & User Stories

['Wireframes'] ()

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
