const Ship = require("./ship");

const Gameboard = () => {

    const ships = []

    const board = (() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          const row = [];
          arr.push(row);
          for (let j = 0; j < 10; j++) {
            const cell = false;
            row.push(cell);
          }
        }
        return arr;
      })();


    //I have not used arrow functions here,  because they do not have their own "this"
    //adding "this" to the function it returns the global object, so you can call after the methos inside Gameboard
    function placeShip (x, y, direction, size)  {
        const newShip = Ship(size)
        if(validPosition(x, y, direction, size)){ 
            if(direction === 'h'){
                for(let i = x; i < x + size; i++) {
                    board[i][y] = true
                    newShip.coords.push([i,y])
                }
            }else if (direction === 'v'){
                for(let j = y; j < y + size; j++) {
                    board[x][j] = true
                    newShip.coords.push([x,j])

                }
            }
            ships.push(newShip)
        }

        return this
    }

    const validPosition = (x, y, direction, size) => {
        if(direction === 'h'){
            // the size of the ship + x coords can not be greater than 10, otherwise the ship is out of the board
            if(x + size > 10) return false
            
        }else if(direction === 'v'){
            // the size of the ship + y coords can not be greater than 10, otherwise the ship is out of the board
            if(y + size > 10) return false 
            
        }
        
        return true
    }

    const emptyPosition = (x, y, direction, size) => {
        if(direction === 'h'){
            for(let i = x; i < x + size; i++){
                if(board[i][y] === true) return false
            }
        }else if (direction === 'v'){
            for(let j = y; j < y + size; j++){
                if(board[x][j] === true) return false
            }

        }
        return true
    }

    const checkBoard = (x, y, direction, size) => {

        if(x === 'empty'){
            for(let i = 0; i<=9; i++){
                for(let j = 0; j<=9; j++)
                    if (!board[i][j] === false) return false 
                }
                return true  //board is empty
            }
        
        if(!validPosition(x, y, direction, size)){
            return false
        }

        if(!emptyPosition(x, y, direction, size))  {
            return false
        }
    

        let checkEmpty = true

        if(direction === 'h'){

            for(let i = x; i<x+size; i++){
                if(board[i][y] !== false){
                    checkEmpty === false
                }
            }

            if(checkEmpty === false ) return false
            else return true

        } else if (direction === 'v'){
            
            for(let i = y ; i<y+size; i++){
                if(board[x][i] !== false){
                    checkEmpty === false
                }
            }

            if(checkEmpty === false ) return false
        }
        return true
    }

    function receiveAttack (x, y) {
        const array = []
        array.push(x)
        array.push(y)
        if(board[x][y] === true){ 
            // hits() el barco tocado
            ships.forEach(ship => {
                ship.coords.forEach(coord => {
                    console.log(coord + ' ' + array)
                    if(coord[0] === array[0] && coord[1] === array[1]){
                        ship.hit()
                    }
                })    
            })
        
            return 'hit'
            // return 'hit'
        }else{
            return 'miss'
        }

    }


    function allSunk () {
        let isAnyFloating = true
        ships.forEach(ship => {
            if(ship.isSunk() === false) isAnyFloating = false
        })

        return isAnyFloating

    }


    return {
        allSunk,
        checkBoard,
        placeShip,
        receiveAttack
    }
}

module.exports = Gameboard


