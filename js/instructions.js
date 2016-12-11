



// code below ready for computer code if later you want to add in:


// THESE WILL BE REDUNDANT. WHAT ELSE??
    // player2NameSelect = "Select opponent:";
    // var select = document.getElementsByTagName('select');
    // select[0].selectedIndex = 0; //reset drop down menu
    // player2Input.hidden = true; //hide player 2 name input on load

//////


// <!-- <label for="opponent">Player 2</label>
// <select id = "player2Select" class="select" name="opponent">
//   <option id="ttt" value="Select_opponent:">Select opponent:</option>
//   <option value="Human">Human</option>
//   <option value="Computer">Computer</option>
// </select>
// <input type="text" id ="nameInput2" class="input" placeholder="Enter Player 2 name...">
// <p id = "player2Error"></p> -->

//var player2Input = document.getElementById("nameInput2");
//player2Input.hidden = true; //hide player 2 name input on load

// html
// <div class="screen screen-start" id="start">
//   <header>
//     <h1>Tic Tac Toe</h1>
//     <a href="#" id="startButton" class="button">Start game</a>
//
//         <div class= "container">
//
//             <div class = "primary col">
//                 <label for="name">Player 1</label>
//                 <input type="text" id ="nameInput1" class="input" placeholder="Enter Player 1 name...">
//                 <p id = "player1Error"></p>
//             </div>
//
//             <div class = "secondary col">
//                 <label for="opponent">Player 2</label>
//                 <select id = "player2Select" class="select" name="opponent">
//                   <option id="ttt" value="Select_opponent:">Select opponent:</option>
//                   <option value="Human">Human</option>
//                   <option value="Computer">Computer</option>
//               </select>
//               <input type="text" id ="nameInput2" class="input" placeholder="Enter Player 2 name...">
//               <p id = "player2Error"></p>
//             </div>
//         </div>
//   </header>
// </div>



// Javascript
// (function () {
//
//
//
// var player1Name = ""; //to be available in global scope. Used by multiple functions.
// var player2Name = "";
//
// var start = document.getElementById("start"); //start screen
// var board = document.getElementById("board"); //board screen
// var finish = document.getElementById("finish"); //board screen
// board.style.display = "none"; // set board original display to none on load.
// var player2Input = document.getElementById("nameInput2");
// player2Input.hidden = true; //hide player 2 name input on load
//
// finish.style.display = "none"; // hide finish board on load.
// function viewSwitch(){ //hide board on load, show start screen
//     start.style.display = "none";
//     board.style.display = "block";
// }
//
//
// ///////////////
// //Start Screen
// ///////////////
//
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
//
//
// /////////////
// // Board
// /////////////
//
// var player1 = document.getElementById("player1"); //this is the header player badge
// var player2 = document.getElementById("player2"); //this is the header player badge
// var classToAdd = " "+"box-filled-1";  // Sets initial value to Player1
//     //This sets the colour and image on the boxes. See CSS file for details.
//     //MUST HAVE A SPACE BEFORE THE CLASS NAME AS ADDING A CLASS TO AN ELEMENT WITH AN EXISTING CLASS REQUIRES THIS, HENCE THE " ".
//
// var hoverImage = "url('img/o.svg')"; // Determines which hover image is displayed. Initial value set to Player1
// var boxUl = document.getElementById("allBoxes"); //The 9 game boxes
// var elementMouseIsOver; // holds the box that cursor is over
//
// var player1Boxes = [];
// var player2Boxes = [];
//
//
// function cursorLocation(event) { // Establish which box mouse is over
//     var x = event.clientX; //capture x & y coordinates of mouse cursor
//     var y = event.clientY;
//     elementMouseIsOver = document.elementFromPoint(x, y); //establish which element mouse is over and store as a temp variable
//     //console.log(elementMouseIsOver);
//     hover();
// }
//
//
// function hover() { //hover player image on empty box
//     if ((elementMouseIsOver.classList.contains('box-filled-1')) || (elementMouseIsOver.classList.contains('box-filled-2'))) { //don't allow hover if box has already been selected (i.e. if it already contains one of the two classes)
//     //do nothing here. Hover not to take place is box already taken.
//     } else {
//         elementMouseIsOver.style.backgroundImage = hoverImage;
//         elementMouseIsOver.onmouseout=function(){
//             elementMouseIsOver.style.backgroundImage = ""; //remove background image when no longer hovering.
//             };
//     }
// }
//
//
// function selectAndSwitch(){ // make box selection and switch players
//     //console.log("selectAndSwitch has fired");
//     if ((elementMouseIsOver.classList.contains('box-filled-1')) || (elementMouseIsOver.classList.contains('box-filled-2'))) {
//         console.log("No player switch allowed");
//         //don't allow player switch if box has already been selected
//     } else {
//         if (player1.classList.contains("active")) { //switch players
//             classToAdd = " "+"box-filled-1"; //marks a box as taken by a player
//             elementMouseIsOver.className += classToAdd;
//             player1Boxes.push(elementMouseIsOver.id); //add selected box id to player array
//             console.log("Player 1 boxes:" +" "+player1Boxes);
//             hoverImage = "url('img/x.svg')"; //this is backwards, I can't figure out why it needs to be that way.
//             player1.classList.remove("active");
//             player2.classList.add("active");
//
//         } else if (player2.classList.contains("active")) { //switch players
//             classToAdd = " "+"box-filled-2";
//             elementMouseIsOver.className += classToAdd;
//             player2Boxes.push(elementMouseIsOver.id); //add selected box id to player array
//             console.log("Player 2 boxes:" +" "+player2Boxes);
//             hoverImage = "url('img/o.svg')"; //this is backwards, I can't figure out why it needs to be that way.
//             player2.classList.remove("active");
//             player1.classList.add("active");
//         }
//     }
//     victoryCondition();
// }
//
//
// // run this function after each time an item is pushed to an array.
// function victoryCondition() {
//     if (((player1Boxes.includes("box1a")) && (player1Boxes.includes("box2a")) && (player1Boxes.includes("box3a"))) ||
//     ((player1Boxes.includes("box1b")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box3b"))) ||
//     ((player1Boxes.includes("box1c")) && (player1Boxes.includes("box2c")) && (player1Boxes.includes("box3c"))) ||
//     // 3 vertical in a row (1a, 2a, 3a OR 1b, 2b, 3b OR 1c, 2c, 3c)
//
//     ((player1Boxes.includes("box1a")) && (player1Boxes.includes("box1b")) && (player1Boxes.includes("box3c"))) ||
//     ((player1Boxes.includes("box2a")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box2c"))) ||
//     ((player1Boxes.includes("box3a")) && (player1Boxes.includes("box3b")) && (player1Boxes.includes("box3c"))) ||
//     // 3 horizontal in a row (1a, 1b, 1c OR 2a, 2b, 2c OR 3a, 3b, 3c)
//
//     ((player1Boxes.includes("box1a")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box3c"))) ||
//     ((player1Boxes.includes("box1c")) && (player1Boxes.includes("box2b")) && (player1Boxes.includes("box3a"))) ) {
//         // 2 diagonals in row (1a, 2b, 3c OR 1c, 2b, 3a)
//
//         console.log("Player 1 wins!");
//         board.style.display = "none";
//         finish.style.display = "block";
//         document.getElementsByClassName("message")[0].innerHTML = player1Name +" " + "wins!";
//         document.getElementById("finish").className += " " +"screen-win-one";
//
//
//
//     } else if
//         (((player2Boxes.includes("box1a")) && (player2Boxes.includes("box2a")) && (player2Boxes.includes("box3a"))) ||
//         ((player2Boxes.includes("box1b")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box3b"))) ||
//         ((player2Boxes.includes("box1c")) && (player2Boxes.includes("box2c")) && (player2Boxes.includes("box3c"))) ||
//         // 3 vertical in a row (1a, 2a, 3a OR 1b, 2b, 3b OR 1c, 2c, 3c)
//
//         ((player2Boxes.includes("box1a")) && (player2Boxes.includes("box1b")) && (player2Boxes.includes("box3c"))) ||
//         ((player2Boxes.includes("box2a")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box2c"))) ||
//         ((player2Boxes.includes("box3a")) && (player2Boxes.includes("box3b")) && (player2Boxes.includes("box3c"))) ||
//         // 3 horizontal in a row (1a, 1b, 1c OR 2a, 2b, 2c OR 3a, 3b, 3c)
//
//         ((player2Boxes.includes("box1a")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box3c"))) ||
//         ((player2Boxes.includes("box1c")) && (player2Boxes.includes("box2b")) && (player2Boxes.includes("box3a"))) ) {
//         // 2 diagonals in row (1a, 2b, 3c OR 1c, 2b, 3a)
//         console.log("Player 2 wins!");
//         board.style.display = "none";
//         finish.style.display = "block";
//         document.getElementsByClassName("message")[0].innerHTML = player2Name +" " + "wins!";
//         document.getElementById("finish").className += " " +"screen-win-two";
//
//     }
//     // if all 9 boxes filled and no victory condition met, it's a tie:
//     else if (player1Boxes.length + player2Boxes.length === 9) {
//         board.style.display = "none";
//         finish.style.display = "block";
//         document.getElementsByClassName("message")[0].innerHTML = "It's a draw!";
//         document.getElementById("finish").className += " " +"screen-win-tie";
//     }
//
// //do the victory / tie classes also need to be removed in the reset?!
//     //yes, victory conditions not working properly after a couple of games
//     //and player 1 needs to start first on second go.
//
// }
//
//
// document.getElementById("newGame").onclick=function() {
//
//     start.style.display = "block";
//     board.style.display = "none";
//     finish.style.display = "none";
//     player1Name = ""; //reset player names
//     player2Name = "";
//     player1Name = document.getElementById("nameInput1").value = "";
//     player2Name = document.getElementById("nameInput2").value = "";
//     player2NameSelect = "Select opponent:";
//
//     var select = document.getElementsByTagName('select');
//     select[0].selectedIndex = 0; //reset drop down menu
//
//     var parent = document.getElementById('allBoxes');
//     var child_nodes = parent.children;
//     console.log(parent.length); //undefined
//     console.log(child_nodes.length); //9
//
//     for (var i = 0; i < child_nodes.length; ++i) {
//       var item = child_nodes[i];
//       if (item.classList.contains("box-filled-1")) {
//       item.classList.remove("box-filled-1");
//       }
//       if (item.classList.contains("box-filled-2")) {
//       item.classList.remove("box-filled-2");
//       }
//     }
//
//
//     if (player2.classList.contains("active")) {
//         player2.classList.remove("active");
//         player1.classList.add("active");
//
//     }
//
//     // reset finish screen classes
//     var finishScreen = document.getElementById("finish");
//     if (finishScreen.classList.contains("screen-win-one")) {
//         finishScreen.classList.remove("screen-win-one");
//     }
//     if (finishScreen.classList.contains("screen-win-two")) {
//         finishScreen.classList.remove("screen-win-two");
//     }
//     if (finishScreen.classList.contains("screen-win-tie")) {
//         finishScreen.classList.remove("screen-win-tie");
//     }
//
//     classToAdd = " "+"box-filled-1";  // Sets initial value to Player1
//
//     hoverImage = "url('img/o.svg')"; // Determines which hover image is displayed. Initial value set to Player1
//
//     player1Boxes = []; //reset player box arrays
//     player2Boxes = [];
//     player2Input.hidden = true; //hide player 2 name input on load
//
//     document.getElementById("player1Error").innerHTML = ""; //clear any start screen error messages present
//     document.getElementById("player2Error").innerHTML = "";
//
// };
//
// //////////////
// // Wiring
// //////////////
//
//
// boxUl.addEventListener("mouseover", cursorLocation);
// boxUl.addEventListener("click", selectAndSwitch);
//
//
//
//
// }());







//unused code:

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
