let ticTacToeGameBoard=document.getElementById("ticTacToeGameBoard");
let allXElements=document.getElementsByClassName("X")



let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cellOptions = ["", "", "", "", "", "", "", "",""];
let currentPlayer = "";


function ticTacToeBoard (){
    for (let numOfRows=0; numOfRows<gameState.ticTacToeBoard.length;numOfRows++){
        let rowEle= document.createElement("div");
        rowEle.classList.add("row");
        let currentJSRow=gameState.ticTacToeBoard[numOfRows];



        for (let cellsMade=0; cellsMade<currentJSRow.length;cellsMade++){
            let cellEle=document.createElement("div");
            cellEle.classList.add("cell");


            if (currentJSRow[cellsMade]!=null){
                cellEle.textContent=currentJSRow[cellsMade];
            }else{

                cellEle.textContent="empty"
            }
             rowEle.appendChild("cellEle")
        }
        ticTacToe.appendChild("rowEle");
    }
};



//  to display name 
document.addEventListener("DOMContentLoaded",ticTacToeBoard)

let nameElement=document.getElementById("name");
console.log(nameElement)

let enterBttnEle=document.getElementById("enter-bttn");
let nameDisplayEle=document.getElementById("name-displayed");

function displayedNameFunc(){
    let nameEnteredDisplay=nameElement.value;
    gameState.currentPlayerName=nameEnteredDisplay;

    nameDisplayEle.textContent='Player 1 name!: ${gameState.currentPlayerName}';

    enterBttnEle.addEventListener("click",displayedNameFunc);

}



