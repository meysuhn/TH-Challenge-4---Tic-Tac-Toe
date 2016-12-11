(function () {


////////////////////
// Global Variables (of the module)
////////////////////

var player1Name = ""; //to be available in global scope. Used by multiple functions.
var player2Name = "";

var start = document.getElementById("start"); //start screen
var board = document.getElementById("board"); //board screen
var finish = document.getElementById("finish"); //finish screen

var player1 = document.getElementById("player1"); //this is the header player badge
var player2 = document.getElementById("player2"); //this is the header player badge
var activePlayer = " "+"box-filled-1";  // Sets initial value to Player1
    //This sets the colour and image on the boxes. See CSS file for details.
    //Must have a " " space before the class name, as it's being added to an element that already has a class. This ensures they remain two sepearate words.

var hoverImage = "url('img/o.svg')"; // Determines which hover image is displayed. Initial value set to Player1
var boxUl = document.getElementById("allBoxes"); //The 9 game boxes
var elementMouseIsOver; // holds the box that cursor is over

//store each players selected boxes
var player1Boxes = [];
var player2Boxes = [];


///////////////
// Functions
///////////////

board.style.display = "none"; // set board original display to none on load.
finish.style.display = "none"; // hide finish board on load.


//Start Screen
// When start button pressed check if two names present. If not, display errors and prevent board display.
document.getElementById("startButton").onclick=function() {
player1Name = document.getElementById("nameInput1").value; //take player1 name value
player2Name = document.getElementById("nameInput2").value; //take player2 name value
document.getElementById("playerNames1").innerHTML = "Player 1:" +"   "+player1Name; //display name
document.getElementById("playerNames2").innerHTML = "Player 2:" +"   "+player2Name;

if (player1Name.length === 0) { //if no name present, display error
    document.getElementById("player1Error").innerHTML = "Please enter your name";
    document.getElementById("player1Error").style.color = '#8B0000';
    } else if (player1Name.length > 0) {
    document.getElementById("player1Error").innerHTML = "";
}

if (player2Name.length === 0) { //if no name present, display error
    document.getElementById("player2Error").innerHTML = "Please enter your name";
    document.getElementById("player2Error").style.color = '#8B0000';
    } else if (player2Name.length > 0) {
    document.getElementById("player2Error").innerHTML = "";
}
if ((player1Name.length > 0) && (player2Name.length > 0)){ //if both names present allow board to show and game start.
        viewSwitch();
    }
};


function viewSwitch(){ //hide start screen, show board
    start.style.display = "none";
    board.style.display = "block";
}





// Board Screen
function cursorLocation(event) { // Establish which box mouse is over
    var x = event.clientX; //capture x & y coordinates of mouse cursor
    var y = event.clientY;
    elementMouseIsOver = document.elementFromPoint(x, y); //establish which element mouse is over and store as a temp variable
    hover();
}


function hover() { //hover player image on empty box
    if ((elementMouseIsOver.classList.contains('box-filled-1')) || (elementMouseIsOver.classList.contains('box-filled-2'))) { //don't allow hover if box has already been selected (i.e. if it already contains one of the two classes)
    //do nothing here. Hover not to take place is box already taken.
    } else {
        elementMouseIsOver.style.backgroundImage = hoverImage;
        elementMouseIsOver.onmouseout=function(){
            elementMouseIsOver.style.backgroundImage = ""; //remove background image when no longer hovering.
            };
    }
}


function selectAndSwitch(){ // make box selection and switch players
    if ((elementMouseIsOver.classList.contains('box-filled-1')) || (elementMouseIsOver.classList.contains('box-filled-2'))) {
        console.log("No player switch allowed");
        //don't allow player switch if box has already been selected
    } else {
        if (player1.classList.contains("active")) { //switch players
            activePlayer = " "+"box-filled-1"; //marks a box as taken by a player
            elementMouseIsOver.className += activePlayer;
            player1Boxes.push(elementMouseIsOver.id); //add selected box id to player array
            hoverImage = "url('img/x.svg')"; //this is backwards, I can't figure out why it needs to be that way.
            player1.classList.remove("active"); //switch active players
            player2.classList.add("active");

        } else if (player2.classList.contains("active")) { //switch players
            activePlayer = " "+"box-filled-2";
            elementMouseIsOver.className += activePlayer; //marks a box as taken by a player
            player2Boxes.push(elementMouseIsOver.id); //add selected box id to player array
            hoverImage = "url('img/o.svg')"; //this is backwards, I can't figure out why it needs to be that way.
            player2.classList.remove("active"); //switch active players
            player1.classList.add("active");
        }
    }
    victoryCondition(); // to determind if any of the new selections have resulted in a victory
}


// run this function after each time an item is pushed to an array.
function victoryCondition() {
    if (((player1Boxes.includes("box1a")) && (player1Boxes.includes("box2a")) && (player1Boxes.includes("box3a"))) ||
    ((player1Boxes.includes("box1b")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box3b"))) ||
    ((player1Boxes.includes("box1c")) && (player1Boxes.includes("box2c")) && (player1Boxes.includes("box3c"))) ||
    // 3 vertical in a row (1a, 2a, 3a OR 1b, 2b, 3b OR 1c, 2c, 3c)

    ((player1Boxes.includes("box1a")) && (player1Boxes.includes("box1b")) && (player1Boxes.includes("box3c"))) ||
    ((player1Boxes.includes("box2a")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box2c"))) ||
    ((player1Boxes.includes("box3a")) && (player1Boxes.includes("box3b")) && (player1Boxes.includes("box3c"))) ||
    // 3 horizontal in a row (1a, 1b, 1c OR 2a, 2b, 2c OR 3a, 3b, 3c)

    ((player1Boxes.includes("box1a")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box3c"))) ||
    ((player1Boxes.includes("box1c")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box3a"))) ) {
        // 2 diagonals in row (1a, 2b, 3c OR 1c, 2b, 3a)

        console.log("Player 1 wins!");
        board.style.display = "none"; //hide board
        finish.style.display = "block"; //show finish screen
        document.getElementsByClassName("message")[0].innerHTML = player1Name +" " + "wins!"; //set winning message
        document.getElementById("finish").className += " " +"screen-win-one"; // show Player 1 winning screen



    } else if
        (((player2Boxes.includes("box1a")) && (player2Boxes.includes("box2a")) && (player2Boxes.includes("box3a"))) ||
        ((player2Boxes.includes("box1b")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box3b"))) ||
        ((player2Boxes.includes("box1c")) && (player2Boxes.includes("box2c")) && (player2Boxes.includes("box3c"))) ||
        // 3 vertical in a row (1a, 2a, 3a OR 1b, 2b, 3b OR 1c, 2c, 3c)

        ((player2Boxes.includes("box1a")) && (player2Boxes.includes("box1b")) && (player2Boxes.includes("box3c"))) ||
        ((player2Boxes.includes("box2a")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box2c"))) ||
        ((player2Boxes.includes("box3a")) && (player2Boxes.includes("box3b")) && (player2Boxes.includes("box3c"))) ||
        // 3 horizontal in a row (1a, 1b, 1c OR 2a, 2b, 2c OR 3a, 3b, 3c)

        ((player2Boxes.includes("box1a")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box3c"))) ||
        ((player2Boxes.includes("box1c")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box3a"))) ) {
        // 2 diagonals in row (1a, 2b, 3c OR 1c, 2b, 3a)
        console.log("Player 2 wins!");
        board.style.display = "none"; // hide board
        finish.style.display = "block"; // show finish screen
        document.getElementsByClassName("message")[0].innerHTML = player2Name +" " + "wins!"; //set winning message
        document.getElementById("finish").className += " " +"screen-win-two"; // show Player 2 winning screen

    }

    // if all 9 boxes filled and no victory condition met, it's a tie:
    else if (player1Boxes.length + player2Boxes.length === 9) { //9 boxes
        board.style.display = "none"; //hide board
        finish.style.display = "block"; //show finish screen
        document.getElementsByClassName("message")[0].innerHTML = "It's a draw!";
        document.getElementById("finish").className += " " +"screen-win-tie";
    }
}



// resets all values back to initial and clear classes from boxes.
document.getElementById("newGame").onclick=function() {

    start.style.display = "block";
    board.style.display = "none";
    finish.style.display = "none";
    player1Name = ""; //reset player names
    player2Name = "";
    player1Name = document.getElementById("nameInput1").value = ""; //reset player names
    player2Name = document.getElementById("nameInput2").value = "";
    activePlayer = " "+"box-filled-1";  // Sets initial value to Player1
    hoverImage = "url('img/o.svg')"; // Determines which hover image is displayed. Initial value set to Player1
    player1Boxes = []; //reset player box arrays
    player2Boxes = [];

    // loop through all boxes and remove classes associated with player selections
    var child_nodes = boxUl.children; // select all 9 game boxes
    for (var i = 0; i < child_nodes.length; ++i) {
      var item = child_nodes[i];
      if (item.classList.contains("box-filled-1")) {
      item.classList.remove("box-filled-1");
      }
      if (item.classList.contains("box-filled-2")) {
      item.classList.remove("box-filled-2");
      }
    }

    // ensure player 1 is set to active on game reload
    if (player2.classList.contains("active")) {
        player2.classList.remove("active");
        player1.classList.add("active");

    }

    // reset finish screen classes
    if (finish.classList.contains("screen-win-one")) {
        finish.classList.remove("screen-win-one");
    }
    if (finish.classList.contains("screen-win-two")) {
        finish.classList.remove("screen-win-two");
    }
    if (finish.classList.contains("screen-win-tie")) {
        finish.classList.remove("screen-win-tie");
    }

    document.getElementById("player1Error").innerHTML = ""; //clear any start screen error messages present
    document.getElementById("player2Error").innerHTML = "";

};

//////////////
// Wiring
//////////////


boxUl.addEventListener("mouseover", cursorLocation); //check for mouse movements over board
boxUl.addEventListener("click", selectAndSwitch); //switch player when selection made.


}());
