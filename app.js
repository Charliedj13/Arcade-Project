// Variables from HTML
let tableElement = document.getElementById("pro")
let playerSelection = document.getElementById("player")

// Variables from JS
let gameStarted = false


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

function cellCallbackFunction(event) {
    console.log(event)
    console.log(event.target)
    
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
        newCell.classList.add(numberTrackerRow)
        numberTrackerRow++

        newCell.addEventListener("click", cellCallbackFunction)

        newRow.appendChild(newCell)
    }

    tableElement.appendChild(newRow)
}
}


const gameState = {
    players: ['x', 'o']
}
function playerTurn (){
    let player = Math.ceil(Math.random () * 2)
    if (player == 1){
        gameState == "x"
        
        console.log("It is X turn")
        
    } else if (player == 2){
        gameState == "o"

        console.log("It is O turn")
        
    }
}






