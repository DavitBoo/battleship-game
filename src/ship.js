const Ship = (shipLength) => {
    let timesHit = 0
    let sunk = false
    let coords = []     //contains the coords of this ship

    function hit () {
        timesHit++;
        return this
    }

    function isSunk () {
        if(shipLength === timesHit) return true;
        else return false
    }


    return {timesHit, sunk, shipLength, hit, isSunk, coords}
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