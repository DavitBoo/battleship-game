const Ship = (shipLength) => {
    let timeHit = 0
    let sunk = false

    function hit () {
        timeHit++;
        return timeHit
    }

    function isSunk () {
        if(shipLength === timeHit) return true;
        else return false
    }

    return {sunk, shipLength, hit, isSunk}
}

// const longShip = Ship(5)
// console.log(longShip.hit())
// console.log(longShip.hit())
// console.log(longShip.hit())
// console.log(longShip.isSunk())
// console.log(longShip.hit())
// console.log(longShip.isSunk())
// console.log(longShip.hit())
// console.log(longShip.isSunk())

module.exports = Ship