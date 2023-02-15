const Player = require("../src/player");
const Gameboard = require("../src/gameboard");

test('how many posible moves are', () => {
    const player = Player();
    expect(player.attacksAvailable()).toEqual(100)
})

test('checks how many attacks left after executing 3 attacks', () => { 
    const player = Player(Gameboard())
    for (let i= 0; i < 3; i++) player.attack()
    expect(player.attacksAvailable()).toEqual(97)
})

test('receive array with the attack coordinates and result', () => {
    const board = Gameboard()
    board.randomShips()
    const player = Player(board)
    for (let i = 0; i < 15; i++)player.attack()
    expect.arrayContaining(player.attack())
})