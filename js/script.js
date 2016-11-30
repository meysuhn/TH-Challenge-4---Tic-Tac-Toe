



(function () {

//document.getElementById("startButton").disabled = true;
var player1Name; //to be available in global scope. Used by multiple functions.
var player2Name;

var start = document.getElementById("start");
var board = document.getElementById("board");
board.style.display = "none"; // set board original display to none.
document.getElementById("startButton").addEventListener("click", getName);
document.getElementById("startButton").addEventListener("click", allowStart);

function viewSwitch(){
    start.style.display = "none";
    board.style.display = "block";
}


function getName() {
        player1Name = document.getElementById("nameInput").value;
        console.log(player1Name);
        document.getElementById("playerNames1").innerHTML = player1Name;
}


//check if Player 1 name is input, and a player 2 selected. Display and remove error messages as required.
function allowStart() {
    player2Name = document.getElementById("player2Select").value;
    if ((player2Name !== "Select_opponent:") && (player1Name.length > 0)){
        viewSwitch();
    } else {
        if (player2Name === "Select_opponent:") {
            document.getElementById("player2Error").innerHTML = "Please select opponent";
            document.getElementById("player2Error").style.color = '#8B0000';

        } else if (player2Name !== "Select_opponent:") {
            document.getElementById("player2Error").innerHTML = "";
        }
        if (player1Name.length === 0) {
            document.getElementById("player1Error").innerHTML = "Please enter your name";
            document.getElementById("player1Error").style.color = '#8B0000';
        } else if (player1Name.length > 0) {
            document.getElementById("player1Error").innerHTML = "";
        }

    }
}






var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player1Boxes = [];
var player2Boxes = [];

var classToAdd = " "+"box-filled-1";  // Sets initial value to Player1 //MUST HAVE A SPACE BEFORE THE CLASS NAME AS ADDING A CLASS TO AN ELEMENT WITH AN EXISTING CLASS REQUIRES THIS, HENCE THE " ".
var hoverImage = "url('img/o.svg')"; // Sets initial value to Player1

/////////////////
//To fix up when I figure out how to toggle between players
function whichPlayer(){ //this provides value for hover and click functions. Needs fixing up for gameplay, this is a temp measure.

    if (player1.classList.contains('active')) { //switch players
        classToAdd = " "+"box-filled-1";
        hoverImage = "url('img/o.svg')";

    } else if (player2.classList.contains('active')) { //switch players
        classToAdd = " "+"box-filled-2";
        hoverImage = "url('img/x.svg')";
    }

}


////////////////


function currentPlayer(){
    //orange to start as active. orange is player 1.
    //change in active status when array lengthincreases by one?
    //quickly review fcc arrays


    //two arrays to store index numbers of their clicked items
        //maybe add a pish method to the hoverAndClick function that pushes to arrays?


    //Programming to say when someone has won.


}



var boxUl = document.getElementById("allBoxes");
boxUl.addEventListener("mouseover", hoverAndClick);
//boxUl.addEventListener("click", boxClick);
var elementMouseIsOver;

    //check if box is already filled. If not, allow hovering. If box clicked, add necessary players' class.
    function hoverAndClick(event) {
        var x = event.clientX; //capture x & y coordinates of mouse cursor
        var y = event.clientY;
        elementMouseIsOver = document.elementFromPoint(x, y); //establish which element mouse is over
        if (!elementMouseIsOver.classList.contains('box-filled-2' || 'box-filled-1')) { //to only run if the box is not already checked.
            console.log("no class");
            elementMouseIsOver.style.backgroundImage = hoverImage;


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
        // still some bugs here. If a player clicks on an already clicked box the player state switches.
            // may have to fix this with array length values

}}());
