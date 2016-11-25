

// (1) When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.

//remove the board related html and insert the start.txt html
    //on new game click load in the game html.

// (2) Add programming, so that when the player clicks the start button the start screen disappears, the board appears, and the game begins. Use the tictactoe-02-inprogress.png mockup, and the board.txt HTML snippet to guide you.

    // Let a player add their name before the game starts
    // Name appears while the game is playing

    // Add the game play following these rules:

        //     Play alternates between X and O.

        //     The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. You can do this by simply adding the class .active to the proper list item in the HTML. For example, if it's player one's turn, the HTML should look like this: <li class="players active" id="player1">

        // DONE -     When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square. You can do this using the x.svg or o.svg graphics (hint use JavaScript to set the background-image property for that box.)

        // DONE -     Players can only click on empty squares. When the player clicks on an empty square, attach the class box-filled-1 (for O) or box-filled-2 (for X) to the square. The CSS we're providing will automatically add the proper image to the square marking it as occupied.

        //     The game ends when one player has three of their symbols in a row either horizontally, vertically or diagonally. If all of the squares are filled and no players have three in a row the game is a tie.


// (3) Add programming so that when the game ends, the board disappears and the game end screen appears. Use the tictactoe-03-winner1.png and tictactoe-04-winner2.png mockups, and the win.txt HTML snippet for guidance. Depending on the game results the final screen should:

        //     Show the word "Winner" or the phrase "It's a Tie!"
            // The name needs to be displayed for the winning player

        //     Add the appropriate class to the <div> for the winning screen: <div class="screen screen-win" id="finish"> screen-win-one for player 1, screen-win-two for player two, or screen-win-tie if the game ends with no winner. For example, if player 1 wins, the HTML should look like this: <div class="screen screen-win screen-win-one" id="finish">


// (4) Add programming so that when a player pushes the "New Game" button, the board appears again, empty, and a new game begins.

    //should be straight forward matter of resetting values. Do this at the end.

// (5) Use the module pattern to wrap all of your JavaScript code into a single global variable or an immediately invoked function.

 //http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

// (6) Add programming to support playing against the computer. Only one player plays, the other is controlled by your programming.
