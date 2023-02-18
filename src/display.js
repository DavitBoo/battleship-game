import { gameLoop, playCPU, playPlayer } from "./game"

export const boardPlayerDOM = document.getElementById('board-player')
export const boardCPUDOM = document.getElementById('board-cpu')
const setupBoard = document.getElementById('setup-board')

const draggedShips = document.querySelector('.ships')

const boardsAllDOM = [boardPlayerDOM, boardCPUDOM]

let ships = [5,4,3,2,1]
let dragAndDropCoords 
let dragAndDropDirection

draggedShips.addEventListener('dragend', () => {
  console.log(ships[0])
  console.log(dragAndDropCoords)
  console.log(draggedShips.classList.contains('col'))
})

setupBoard.addEventListener('dragenter', (e) => {
  dragAndDropCoords = e.target.dataset.coords 
  dragAndDropDirection = e.target.classList
})

draggedShips.addEventListener('dragstart', (e) => {
  console.log('you picked me up!')
})


draggedShips.addEventListener('click', () => {
  draggedShips.classList.toggle('col')
})

//  

export const displayDragShips = () => {
  draggedShips.innerHTML = ''
  for(let i = 0; i < ships[0]; i++){
      let div = document.createElement('div')
      div.classList.add(`ship-part`)
      draggedShips.appendChild(div)

    }
  // ships.shift()
}

export const createSetupBoard = () => {
  setupBoard.innerHTML = ''
  for(let i = 0; i<10 ; i++){
     for(let j = 0; j < 10; j++){
      let div = document.createElement('div')
      div.classList.add(`position`)
      div.setAttribute("data-coords", `${i}-${j}`);
      setupBoard.appendChild(div)
     }
  }
}

export const createBoard = gameboardsInfo  =>  {
    boardsAllDOM.forEach((board, index) => {
        board.innerHTML = ''
        gameboardsInfo[index].forEach((row, i) => {
            row.forEach((cell, j) => {
                let div = document.createElement('div')
                div.classList.add(`position`)
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