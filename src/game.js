const { createBoard, boardCoordinate, leftBoardAttack, gameWonBy, createSetupBoard, displayDragShips } = require("./display");
const Gameboard = require("./gameboard");
const Player = require("./player");

let gameEnd = false

const playerBoard = Gameboard();
const cpuBoard = Gameboard();
const player = Player(cpuBoard);
const cpu = Player(playerBoard);

displayDragShips();

createSetupBoard(playerBoard.board)

export const setupTheGame = (x, y, direction, size) => {
    console.log(playerBoard.placeShip (x, y, direction, size))
    createSetupBoard(playerBoard.board)
    
}


export const startGame = () => {
    // do not delete
  //  playerBoard.randomShips();
    cpuBoard.randomShips();

    createBoard([playerBoard.board, cpuBoard.board]);
    boardCoordinate(cpuBoard)
}

export const gameLoop = () => {
    if(cpuBoard.allSunk() === true){
        console.log('Player won')
        gameWonBy('You')
        gameEnd = true
    }else if (playerBoard.allSunk() === true){
        console.log('CPU won')
        gameWonBy('Computer')
        gameEnd = true
    }
    playCPU()
}

export const playCPU = () => {
    if(!gameEnd){
        let {result, x, y} = cpu.attack();
        leftBoardAttack(result, x , y)
        // gameLoop()
    }
}

export const playPlayer = xycoords => {
    let [x, y] = xycoords
    return cpuBoard.receiveAttack(x, y)
}