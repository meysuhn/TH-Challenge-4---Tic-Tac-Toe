

// var myBoxClasses1a = document.getElementById("box1a").classList;
// if (myBoxClasses1a.contains("box-filled-1")) {
// myBoxClasses1a.remove("box-filled-1");
// }
// if (myBoxClasses1a.contains("box-filled-2")) {
// myBoxClasses1a.remove("box-filled-2");
// }
// var myBoxClasses2a = document.getElementById("box2a").classList;
// if (myBoxClasses2a.contains("box-filled-1")) {
// myBoxClasses2a.remove("box-filled-1");
// }
// if (myBoxClasses2a.contains("box-filled-2")) {
// myBoxClasses2a.remove("box-filled-2");
// }
// var myBoxClasses3a = document.getElementById("box3a").classList;
// if (myBoxClasses3a.contains("box-filled-1")) {
// myBoxClasses3a.remove("box-filled-1");
// }
// if (myBoxClasses3a.contains("box-filled-2")) {
// myBoxClasses3a.remove("box-filled-2");
// }
// var myBoxClasses1b = document.getElementById("box1b").classList;
// if (myBoxClasses1b.contains("box-filled-1")) {
// myBoxClasses1b.remove("box-filled-1");
// }
// if (myBoxClasses1b.contains("box-filled-2")) {
// myBoxClasses1b.remove("box-filled-2");
// }
// var myBoxClasses2b = document.getElementById("box2b").classList;
// if (myBoxClasses2b.contains("box-filled-1")) {
// myBoxClasses2b.remove("box-filled-1");
// }
// if (myBoxClasses2b.contains("box-filled-2")) {
// myBoxClasses2b.remove("box-filled-2");
// }
// var myBoxClasses3b = document.getElementById("box3b").classList;
// if (myBoxClasses3b.contains("box-filled-1")) {
// myBoxClasses3b.remove("box-filled-1");
// }
// if (myBoxClasses3b.contains("box-filled-2")) {
// myBoxClasses3b.remove("box-filled-2");
// }
// var myBoxClasses1c = document.getElementById("box1c").classList;
// if (myBoxClasses1c.contains("box-filled-1")) {
// myBoxClasses1c.remove("box-filled-1");
// }
// if (myBoxClasses1c.contains("box-filled-2")) {
// myBoxClasses1c.remove("box-filled-2");
// }
// var myBoxClasses2c = document.getElementById("box2c").classList;
// if (myBoxClasses2c.contains("box-filled-1")) {
// myBoxClasses2c.remove("box-filled-1");
// }
// if (myBoxClasses2c.contains("box-filled-2")) {
// myBoxClasses2c.remove("box-filled-2");
// }
// var myBoxClasses3c = document.getElementById("box3c").classList;
// if (myBoxClasses3c.contains("box-filled-1")) {
// myBoxClasses3c.remove("box-filled-1");
// }
// if (myBoxClasses3c.contains("box-filled-2")) {
// myBoxClasses3c.remove("box-filled-2");
// }


//check if box is already filled. If not, allow hovering. If box clicked, add necessary players' class.
function hoverAndClick(event) {
    var x = event.clientX; //capture x & y coordinates of mouse cursor
    var y = event.clientY;
    elementMouseIsOver = document.elementFromPoint(x, y); //establish which element mouse is over

    if (elementMouseIsOver.classList.contains('box-filled-2' || 'box-filled-1')) { //to only run if the box is not already checked.
    } else {
            console.log("no class");
            //HOVER IMAGE AND REMOVE HOVER IMAGE
            elementMouseIsOver.style.backgroundImage = hoverImage;
            elementMouseIsOver.onmouseout=function(){
                elementMouseIsOver.style.backgroundImage = ""; //remove background image when no longer hovering.
                };
            }
    if (elementMouseIsOver.classList.contains('box-filled-2' || 'box-filled-1')) { //to only run if the box is not already checked.
    } else {


    }







//adapt the the above to put something here which only allows the below to fire if clicked on an element without 'box-filled-2' || 'box-filled-1'
elementMouseIsOver.onclick=function(){
    elementMouseIsOver.className += classToAdd;

    if (player1.classList.contains("active")) { //switch players
        player1.classList.remove("active");
        player2.classList.add("active");

    } else if (player2.classList.contains("active")) { //switch players

        player2.classList.remove("active");
        player1.classList.add("active");
    }
    whichPlayer(); //change hoverImage and classToAdd
};
elementMouseIsOver.onmouseout=function(){
    elementMouseIsOver.style.backgroundImage = ""; //remove background image when no longer hovering.
};
}




    // if (player2Name === "Human") {
    // var player2select = document.getElementById("hhhhh");
    // var human2NameInput = document.createElement("input"); //create input element
    // human2NameInput.type = "text"; //set input type attribute
    // human2NameInput.placeholder = "Player 2 Name..."; //add placeholder attribute
    // human2NameInput.id = "human2Name player2Select"; //add id to input element
    // player2select.appendChild(human2NameInput); //append the newly formed input variable to the form variable holding the first fieldset.

    //this needs wiring up.
        //and fix names up (variables, ids etc)
        // could I hard code in and just hide / show as required. Probably tidier.
//}


// function setNames () { //Get player name inputs and set names on board
//     player2NameSelect = document.getElementById("player2Select").value;
//     if (player2NameSelect === "Human") {
//         player2Input.hidden = false;
//         player2Name = document.getElementById("nameInput1").value;
//     } else {
//         player2Input.hidden = true;
//         player2Name = "Computer";
//     }
//     player1Name = document.getElementById("nameInput1").value;
//     document.getElementById("playerNames1").innerHTML = "Player 1:" +"   "+player1Name;
//     document.getElementById("playerNames2").innerHTML = "Player 2:" +"   "+player2Name;
// }



// function allowStart() {
//
//     player2Name = document.getElementById("player2Select").value;
//     if ((player2Name !== "Select_opponent:") && (player1Name.length > 0)){
//         viewSwitch();
//     } else {
//         if (player2Name === "Select_opponent:") {
//             document.getElementById("player2Error").innerHTML = "Please select opponent";
//             document.getElementById("player2Error").style.color = '#8B0000';
//
//         } else if (player2Name !== "Select_opponent:") {
//             document.getElementById("player2Error").innerHTML = "";
//         }
//         if (player1Name.length === 0) {
//             document.getElementById("player1Error").innerHTML = "Please enter your name";
//             document.getElementById("player1Error").style.color = '#8B0000';
//         } else if (player1Name.length > 0) {
//             document.getElementById("player1Error").innerHTML = "";
//         }
//     }
// }

//////////////////////////////
// Wiring
//////////////////////////////

//document.getElementById("startButton").addEventListener("click", allowStart);
//document.getElementById("player2Select").addEventListener("change", setNames);



<div class= "board">
    <div class = "board">
        <p>Player 1</p>
    </div>
    <div class = "board">
        <p>Player 2</p>
    </div>
</div>

// (1) DONE - When the page loads, the startup screen should appear. Use the tictactoe-01-start.png mockup, and the start.txt HTML snippet to guide you.

//remove the board related html and insert the start.txt html
    //on new game click load in the game html.

// (2) DONE - Add programming, so that when the player clicks the start button the start screen disappears, the board appears, and the game begins. Use the tictactoe-02-inprogress.png mockup, and the board.txt HTML snippet to guide you.

    // Let a player add their name before the game starts
    // Name appears while the game is playing

    // Add the game play following these rules:

        //     Play alternates between X and O.

        // DONE -   The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. You can do this by simply adding the class .active to the proper list item in the HTML. For example, if it's player one's turn, the HTML should look like this: <li class="players active" id="player1">

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
