



(function () {


/////////////////
//To fix up when I figure out how to toggle between players
function whichPlayer(){ //this provides value for hover and click functions. Needs fixing up for gameplay, this is a temp measure.
    var player1 = "url('img/o.svg')";
    var player2 = "url('img/x.svg')";

    var thePlayer = player1;
    return thePlayer;

}

var classToAdd = " "+"box-filled-1"; // or box-filled-1 //MUST HAVE A SPACE BEFORE THE CLASS NAME AS ADDING A CLASS TO AN ELEMENT WITH AN EXISTING CLASS REQUIRES THIS, HENCE THE " ".

////////////////


function currentPlayer(){
    //two arrays to store index numbers of their clicked items
        //maybe add a pish method to the hoverAndClick function that pushes to arrays?

    //need a way to switch players after each click.

    // The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. You can do this by simply adding the class .active to the proper list item in the HTML. For example, if it's player one's turn, the HTML should look like this: <li class="players active" id="player1">

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
            elementMouseIsOver.style.backgroundImage = whichPlayer();

            elementMouseIsOver.onclick=function(){
                elementMouseIsOver.className += classToAdd;
            };
            //click function here?

            elementMouseIsOver.onmouseout=function(){
                elementMouseIsOver.style.backgroundImage = ""; //remove background image when no longer hovering.
            };
        }


    }

}());
