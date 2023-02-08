// Variables from HTML

// Variables from JS
let gameStarted = false


window.addEventListener("click", function () {
 if (gameStarted == false){
    console.log("Is this working")
    buildGrid ()
    gameStarted = true
 }
})

const table = document.getElementsByTagName("table")[0]

function buildGrid () {
    for (let numOfRows = 0; numOfRows < 3; numOfRows++){
    let newRow = document.createElement("tr")
    newRow.style.backgroundColor = "red"
    newRow.style.border = "2px solid black"

    for (let numOfColumns = 0; numOfColumns < 3; numOfColumns++) {
        let newColumn = document.createElement("td") 

        newColumn.style.backgroundColor = "red"
        newColumn.style.border = "2px solid black"
        
        newRow.appendChild(newColumn)
    }
    tableElement.appendChild(newRow)
}
}

// const gameState = {
//     players: ["x", "o"]
    
// }

