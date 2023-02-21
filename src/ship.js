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
        if(shipLength === this.timesHit) {
            sunk = true
            return true;
        }
        else return false
    }


    return {timesHit, sunk, shipLength, hit, isSunk, coords}
}

module.exports = Ship