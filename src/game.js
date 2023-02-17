const { createBoard, boardCoordinate, leftBoardAttack } = require("./display");
const Gameboard = require("./gameboard");
const Player = require("./player");

const playerBoard = Gameboard();
const cpuBoard = Gameboard();
const player = Player(cpuBoard);
const cpu = Player(playerBoard);

export const startGame = () => {

    playerBoard.randomShips();
    cpuBoard.randomShips();

    createBoard([playerBoard.board, cpuBoard.board]);
    boardCoordinate(cpuBoard)
}

export const gameLoop = () => {
    if(cpuBoard.allSunk() === true){
        console.log('Player won')
    }else if (playerBoard.allSunk() === true){
        console.log('CPU won')
    }
    playCPU()
}

export const playCPU = () => {
    let {result, x, y} = cpu.attack();
    leftBoardAttack(result, x , y)
    // gameLoop()
}

export const playPlayer = xycoords => {
    let [x, y] = xycoords
    return cpuBoard.receiveAttack(x, y)
}