const Player = () => {
    let myTurn = false

    const allTheCoords  = (() => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            arr.push([i, j])
          }
        }
        return arr;
    })();

    function shoot (coords) {
        const [coordX, coordY] = coords
    }

    function randomShoot() {
        randomNum = Math.floor(Math.random() * allTheCoords.length)
        let cpuShoot = allTheCoords[randomNum]
        allTheCoords.splice(randomNum, 1)
        console.log(allTheCoords)
        return cpuShoot
    }


    return {
        randomShoot
    }
}

const player = Player()
console.log(player.randomShoot())