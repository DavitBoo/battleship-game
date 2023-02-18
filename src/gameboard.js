const Ship = require("./ship");

const Gameboard = () => {

    const ships = []

    const board = (() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          const row = [];
          arr.push(row);
          for (let j = 0; j < 10; j++) {
            row.push(false);
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
        if(direction === "h" && x + size > 10) return false          
        if(direction === "v" && y + size > 10) return false 
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
        if(board[x][y] === true){ 
            // hits() el barco tocado
            ships.forEach(ship => {
                ship.coords.forEach(coord => {
                    if(coord[0] == x && coord[1] == y){
                        ship.hit()                     
                    }
                })    
            })
            board[x][y] = 'hit'
            return 'hit'
            // return 'hit'
        }else if(board[x][y] === false){
            board[x][y] = 'miss'
            return 'miss'
        }else return undefined

    }

    function allSunk () {
        let isAnyFloating = true
        ships.forEach(ship => {
            if(ship.isSunk() === false) {
                isAnyFloating = false
            }
        })
        
        return isAnyFloating

    }

    function randomShips () {
        let x, y, d 
        const direction = ['h', 'v'], size = [1, 2, 3, 4, 5]
        for(let i=0; i < size.length; i++){
            do {
                x = Math.floor(Math.random() * 10)
                y = Math.floor(Math.random() * 10)
                d = Math.floor(Math.random() * 2)
            } while (!checkBoard(x, y, direction[d], size[i]));
        placeShip(x, y, direction[d], size[i])
        }   
    }


    return {
        allSunk,
        board,
        checkBoard,
        placeShip,
        receiveAttack,
        randomShips
    }
}

module.exports = Gameboard


