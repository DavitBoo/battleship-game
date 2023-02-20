const Player = board => {

    const allTheCoords  = (() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            arr.push([i, j])
          }
        }
        return arr;
    })();

    const attacksAvailable = () => {
        return allTheCoords.length
    }

    let result, x, y

    const randomNum = () => {
        if(result === 'hit') {
            // get all adjacent coords
            const adjacentCoords = [];
            if (x > 0) adjacentCoords.push([x - 1, y]);
            if (x < 9) adjacentCoords.push([x + 1, y]);
            if (y > 0) adjacentCoords.push([x, y - 1]);
            if (y < 9) adjacentCoords.push([x, y + 1]);
        
            // filter out coords that have already been attacked
            const availableAdjacentCoords = adjacentCoords.filter(coord => {
              const [x, y] = coord;
              return allTheCoords.some(c => c[0] === x && c[1] === y);
            });
        
            // if there are available adjacent coords, choose one randomly
            if (availableAdjacentCoords.length > 0) {
              const [chosenX, chosenY] = availableAdjacentCoords[Math.floor(Math.random() * availableAdjacentCoords.length)];
              const chosenIndex = allTheCoords.findIndex(coord => coord[0] === chosenX && coord[1] === chosenY);
              return chosenIndex;
            }
          }
          return Math.floor(Math.random() * allTheCoords.length);
    }

    // const selectedByPlayer = (x, y) => {
    //     return allTheCoords.find(coord => coord[0] === x && coord[1] === y)
        
    // }

    const attack = (coords = randomNum()) => {
        [x,y] = allTheCoords.splice(coords, 1)[0]
        result = board.receiveAttack(x, y)
        return {result, x, y}
    }

    return {
        attacksAvailable,
        attack
    }
}

module.exports = Player;