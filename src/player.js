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

    const randomNum = () => Math.floor(Math.random() * allTheCoords.length)

    // const selectedByPlayer = (x, y) => {
    //     return allTheCoords.find(coord => coord[0] === x && coord[1] === y)
        
    // }

    const attack = (coords = randomNum()) => {
        const [x,y] = allTheCoords.splice(coords, 1)[0]
        let result = board.receiveAttack(x, y)
        return {result, x, y}
    }

    return {
        attacksAvailable,
        attack
    }
}

module.exports = Player;