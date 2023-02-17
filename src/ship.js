const Ship = (shipLength) => {
    let timesHit = 0
    let sunk = false
    let coords = []     //contains the coords of this ship

    function hit () {
        this.timesHit++;
        //timesHit++
        return this
    }

    function isSunk () {

        console.log(shipLength === this.timesHit)
        if(shipLength === this.timesHit) {
            sunk = true
            return true;
        }
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