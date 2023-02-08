const Ship = require("./ship")

const Gameboard = () => {

    let board = (() => {
        //creates row
        const arr = [];
        for(let i = 0; i<=9; i++){
            arr.push([])
            //creates columns
            for(let j = 0; j<=9; j++)
                arr[i].push(false)
        }

        return arr
    })()


    function placeAShip (ship, coords, direction = 'row') {
        ship.shipLength
        let [coordX, coordY] = coords
        
        if(direction === 'row'){
            // the size of the ship + x coords can not be greater than 10, otherwise the ship is out of the board
            if(coordX + ship.shipLength > 10) return
            else{
                for(let i=0; i < ship.shipLength; i++){
                    board[coordX][coordY] = true
                    ship.coords.push([coordX, coordY])
                    coordX++
                }
            }
        }else{
            // the size of the ship + y coords can not be greater than 10, otherwise the ship is out of the board
            if(coordY + ship.shipLength > 10) return 
            else{
                for(let i=0; i < ship.shipLength; i++){
                    board[coordX][coordY] = true
                    ship.coords.push([coordX, coordY])
                    coordY++
                }
            }
        }
        return board
    }

    function receiveAttack (coords) {
        let [coordX, coordY] = coords
        if(board[coordX][coordY] === true){
            // hits() el barco tocado
            board[coordX][coordY] = 'O'
        }else{
            board[coordX][coordY] = 'X'
        }
        return board
    }

    function allShipsAreSunk() {
        for(let i = 0; i<=9; i++){
            for(let j = 0; j<=9; j++)
                if (!board[i][j] === true) return true  //all ships are sunk
        }
        return false
    }

    // function isEmpty (x, y, orientation, length) {
    //     console.log(board)
    //     for(let i = 0; i<=9; i++){
    //         for(let j = 0; j<=9; j++)
    //             if (!board[i][j] === false) return false 
    //     }
    //     return true  //board is empty
    // }

    return {
        placeAShip,
        receiveAttack,
        allShipsAreSunk,
        isBoardEmpty
    }

}

const player1 = Gameboard()
// player1.createBoard()

const newShip = Ship(5)
player1.placeAShip(newShip, [1,2])

player1.receiveAttack([2,3])
console.log(player1.receiveAttack([2,2]))
console.log(player1.allShipsAreSunk())

console.log(newShip.coords)

// Gameboard().isBoardEmpty()

module.exports = Gameboard