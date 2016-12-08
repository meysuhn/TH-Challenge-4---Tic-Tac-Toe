



(function () {



// var player1Name = ""; //to be available in global scope. Used by multiple functions.
// var player2Name = "";
//
// var start = document.getElementById("start"); //start screen
// var board = document.getElementById("board"); //board screen
// board.style.display = "none"; // set board original display to none on load.
// var player2Input = document.getElementById("nameInput2");
// player2Input.hidden = true; //hide player 2 name input on load
//
//
//
// function viewSwitch(){ //hide board on load, show start screen
//     start.style.display = "none";
//     board.style.display = "block";
// }


/////////////////
// Start Screen
/////////////////

// document.getElementById("start").onchange=function() {
//     player2NameSelect = document.getElementById("player2Select").value;
//     if (player2NameSelect === "Human") {
//         player2Input.hidden = false;
//         player2Name = document.getElementById("nameInput2").value;
//     } else {
//         player2Input.hidden = true;
//         player2Name = "Computer";
//     }
//     player1Name = document.getElementById("nameInput1").value;
//     document.getElementById("playerNames1").innerHTML = "Player 1:" +"   "+player1Name;
//     document.getElementById("playerNames2").innerHTML = "Player 2:" +"   "+player2Name;
//
// };
//
//
// //check if Player 1 name is input, and a player 2 selected. Display and remove error messages as required.
// document.getElementById("startButton").onclick=function() {
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
// };


/////////////
// Board
/////////////


var player1 = document.getElementById("player1"); //this is the header player badge
var player2 = document.getElementById("player2"); //this is the header player badge
var classToAdd = " "+"box-filled-1";  // Sets initial value to Player1
    //This sets the colour and image on the boxes. See CSS file for details.
    //MUST HAVE A SPACE BEFORE THE CLASS NAME AS ADDING A CLASS TO AN ELEMENT WITH AN EXISTING CLASS REQUIRES THIS, HENCE THE " ".

var hoverImage = "url('img/o.svg')"; // Determines which hover image is displayed. Initial value set to Player1
var boxUl = document.getElementById("allBoxes"); //The 9 game boxes
var elementMouseIsOver; // holds the box that cursor is over

var player1Boxes = [];
var player2Boxes = [];


function cursorLocation(event) { // Establish which box mouse is over
    var x = event.clientX; //capture x & y coordinates of mouse cursor
    var y = event.clientY;
    elementMouseIsOver = document.elementFromPoint(x, y); //establish which element mouse is over and store as a temp variable
    //console.log(elementMouseIsOver);
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
    //console.log("selectAndSwitch has fired");
    if ((elementMouseIsOver.classList.contains('box-filled-1')) || (elementMouseIsOver.classList.contains('box-filled-2'))) {
        console.log("No player switch allowed");
        //don't allow player switch if box has already been selected
    } else {
        if (player1.classList.contains("active")) { //switch players
            classToAdd = " "+"box-filled-1"; //marks a box as taken by a player
            elementMouseIsOver.className += classToAdd;
            player1Boxes.push(elementMouseIsOver.id); //add selected box id to player array
            console.log("Player 1 boxes:" +" "+player1Boxes);
            hoverImage = "url('img/x.svg')"; //this is backwards, I can't figure out why it needs to be that way.
            player1.classList.remove("active");
            player2.classList.add("active");

        } else if (player2.classList.contains("active")) { //switch players
            classToAdd = " "+"box-filled-2";
            elementMouseIsOver.className += classToAdd;
            player2Boxes.push(elementMouseIsOver.id); //add selected box id to player array
            console.log("Player 2 boxes:" +" "+player2Boxes);
            hoverImage = "url('img/o.svg')"; //this is backwards, I can't figure out why it needs to be that way.
            player2.classList.remove("active");
            player1.classList.add("active");
        }
    }
    victoryCondition();
}



//////////////
// Gameplay
//////////////

// Need to track which box belongs to which player

// Need to determine when a victory condition is achieved.

// Victory conditions






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
    }


}




//////////////
// Wiring
//////////////


boxUl.addEventListener("mouseover", cursorLocation);
boxUl.addEventListener("click", selectAndSwitch);




}());
