const Ship = require("./ship")


const Gameboard = () => {
    
    let board = []
    
    function createBoard () {
        //creates row
        for(let i = 0; i<=9; i++){
            board.push([])
            //creates columns
            for(let j = 0; j<=9; j++)
                board[i].push(false)
        }

        return board
    }

    function placeAShip () {
        
    }

    return {createBoard}

}

const player1 = Gameboard()
console.log(player1.createBoard())

module.exports = Gameboard