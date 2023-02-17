import { gameLoop, playCPU, playPlayer } from "./game"

export const boardPlayerDOM = document.getElementById('board-player')
export const boardCPUDOM = document.getElementById('board-cpu')

const boardsAllDOM = [boardPlayerDOM, boardCPUDOM]

export const createBoard = gameboardsInfo  =>  {
    boardsAllDOM.forEach((board, index) => {
        board.innerHTML = ''
        gameboardsInfo[index].forEach((row, i) => {
            row.forEach((cell, j) => {
                let div = document.createElement('div')
                div.classList.add(`position`)
                // if(cell === 'hit'){
                //      div.classList.add(`hit`)
                //  } else if(cell === 'miss') div.classList.add(`miss`)
                div.setAttribute("data-coords", `${i}-${j}`);
                board.appendChild(div)
            })
        })
        
    })
    
}

const handleClick = (coord) => {
    let clickedCoords = coord.dataset.coords
    let xy = clickedCoords.split('-')
    if(!coord.classList.contains("hit") && !coord.classList.contains("miss")){
        let result = playPlayer(xy)
        if (result === "hit") {
          coord.classList.add("hit")
        } else {
          coord.classList.add("miss")
        }
        gameLoop();
    }
  }

  let coordinatesBoardCPU  = document.querySelectorAll('#board-cpu .position')

  export const boardCoordinate  = board => {
    coordinatesBoardCPU  = document.querySelectorAll('#board-cpu .position')
    coordinatesBoardCPU.forEach(coord => {
      coord.addEventListener('click', () => handleClick(coord))
    })
  }


export const leftBoardAttack = (result, x ,y) => {
    const coordinates = [...document.querySelectorAll('#board-player .position')]
    const found = coordinates.find(cell => cell.dataset.coords === `${x}-${y}`)
    if (result === "hit") {
        found.classList.add("hit")
    } else {
        found.classList.add("miss")
    }
}

export const gameWonBy = winner => {
    alert(`${winner} won the game`)
}