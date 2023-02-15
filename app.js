// Variables from HTML
let tableElement = document.getElementById("pro")
let playerSelection = document.getElementById("player")
let gameOver = document.getElementById("gameover")
let playerDisplay = document.getElementById("player-display")

// Variables from JS
let gameStarted = false
let gameState = {
    players: ['x', 'o'],
    currentPlayer: "O"
}

let name1 = window.prompt("What is your name Player 1?")
let name2 = window.prompt("What is your name Player 2?")
playerDisplay.textContent = name1 + " (X)" + " vs. " + name2 + " (O)"

window.addEventListener("DOMContentLoaded", function () {
 if (gameStarted == false){
    console.log("Is this working")
    buildGrid ()
    playerTurn ()
    gameStarted = true
 }
})
let gameBoardTTT = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]


function playerTurn (){
    let player = Math.ceil(Math.random () * 2)
    if (player == 1){
        // gameState == "x"
        // console.log(gameState["currentPlayer"])
        gameState.currentPlayer = "X"
        console.log(gameState.currentPlayer)
        playerSelection.textContent = "It is X turn"
        console.log("It is X turn")
        
    } else if (player == 2){
        gameState.currentPlayer == "O"
        console.log(gameState.currentPlayer)
        playerSelection.textContent = "It is O turn"
        console.log("It is O turn")
    }
}


function cellCallbackFunction(event) {
    
    // console.log(event)
    console.log(event.target.classList)
    let position = event.target.classList[1]
    let row = position[0]
    let cell = position[1]

    // console.log(typeof event.target.classList[1])
    if (event.target.textContent == "") {
    console.log(gameState.currentPlayer)
    console.log(event.target.textContent)
    event.target.textContent = gameState.currentPlayer
    gameBoardTTT[row][cell] = gameState.currentPlayer;
    console.log(gameBoardTTT)

    function changePlayer () {
        if (event.target.textContent == "X") {
            console.log("The current player is now O")
        gameState.currentPlayer = "O"
        playerSelection.textContent = "It is O turn"
        console.log("player switch to O")
    } else if (event.target.textContent == "O") {
        gameState.currentPlayer = "X"
        console.log("player switch to X")
        playerSelection.textContent = "It is X turn"
    }
    }
    changePlayer()
}
   
    
    

    if (gameBoardTTT[0][0] == "X" && gameBoardTTT[0][1] == "X" && gameBoardTTT[0][2] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[1][0] == "X" && gameBoardTTT[1][1] == "X" && gameBoardTTT[1][2] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[2][0] == "X" && gameBoardTTT[2][1] == "X" && gameBoardTTT[2][2] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[0][0] == "X" && gameBoardTTT[1][0] == "X" && gameBoardTTT[2][0] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again"
    } else if (gameBoardTTT[0][1] == "X" && gameBoardTTT[1][1] == "X" && gameBoardTTT[2][1] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[0][2] == "X" && gameBoardTTT[1][2] == "X" && gameBoardTTT[2][2] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[0][0] == "X" && gameBoardTTT[1][1] == "X" && gameBoardTTT[2][2] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[0][2] == "X" && gameBoardTTT[1][1] == "X" && gameBoardTTT[2][0] == "X"){
        gameOver.textContent = "The Game is over, X wins. Reload the page to play again."
    } else if (gameBoardTTT[0][0] == "O" && gameBoardTTT[0][1] == "O" && gameBoardTTT[0][2] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[1][0] == "O" && gameBoardTTT[1][1] == "O" && gameBoardTTT[1][2] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[2][0] == "O" && gameBoardTTT[2][1] == "O" && gameBoardTTT[2][2] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[0][0] == "O" && gameBoardTTT[1][0] == "O" && gameBoardTTT[2][0] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[0][1] == "O" && gameBoardTTT[1][1] == "O" && gameBoardTTT[2][1] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[0][2] == "O" && gameBoardTTT[1][2] == "O" && gameBoardTTT[2][2] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[0][0] == "O" && gameBoardTTT[1][1] == "O" && gameBoardTTT[2][2] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    } else if (gameBoardTTT[0][2] == "O" && gameBoardTTT[1][1] == "O" && gameBoardTTT[2][0] == "O"){
        gameOver.textContent = "The Game is over, O wins. Reload the page to play again."
    }
    if (gameBoardTTT[0][0] !== undefined && gameBoardTTT[0][1] !== undefined && gameBoardTTT[0][2] !== undefined && gameBoardTTT[1][0] !== undefined && gameBoardTTT[1][1] !== undefined && gameBoardTTT[1][2] !== undefined && gameBoardTTT[2][0] !== undefined && gameBoardTTT[2][1] !== undefined && gameBoardTTT[2][2] !== undefined && gameOver.textContent !== "The game is over, O wins. Reload the page to play again." && gameOver.textContent !== "The game is over, X wins. Reload the page to play again.") {
        gameOver.textContent = "The Game ends in a tie. Reload the page to play again."
    }
    
    
    
    // function changePlayer () {
    //     if (currentPlayer = "X") {
    //     gameStarted.currentPlayer = "O"
    // } else {
    //     gameStarted.currentPlayer = "X"
    // }

    // }


    // console.log(targetIndexPosition)
    // console.log(typeof targetIndexPosition)
       
}



const table = document.getElementsByTagName("table")[0]

function buildGrid () {
    let numberTrackerRow = 0
    for (let indexPosition = 0; indexPosition < gameBoardTTT.length; indexPosition++){
    let newRow = document.createElement("tr")
    // newRow.className = "cell"
        newRow.style.backgroundColor = "red"
        newRow.style.border = "2px solid black"
        newRow.classList.add(indexPosition)

    for (let numOfColumns = 0; numOfColumns < gameBoardTTT.length; numOfColumns++) {
        let newCell = document.createElement("td") 
        newCell.classList.add("cell")

        // newRow.classList.add(indexPosition)
        // newCell.classList.add(numberTrackerRow)
        // numberTrackerRow++

        newCell.classList.add(`${indexPosition}${numOfColumns}`)

        newCell.addEventListener("click", cellCallbackFunction)

        newRow.appendChild(newCell)
    }

    tableElement.appendChild(newRow)
}
}


// const gameState = {
//     players: ['x', 'o']
// }
// function playerTurn (){
//     let player = Math.ceil(Math.random () * 2)
//     if (player == 1){
//         gameState == "x"
//         playerSelection.textContent = "It is X turn"
//         console.log("It is X turn")
        
//     } else if (player == 2){
//         gameState == "o"
//         playerSelection.textContent = "It is O turn"
//         console.log("It is O turn")
        
//     }
// }






