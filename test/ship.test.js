const Ship = require("../src/ship");

test('test if new ship is sunk', () => {
    expect(Ship(4).isSunk()).toBe(false);
})

test('test if ship with length 1 is sunk after 1 hit', () => {
    expect(Ship(1).hit().isSunk()).toEqual(true);
})

test('test if ship with length 4 is sunk after 1 hit', () => {
    expect(Ship(4).hit().isSunk()).toEqual(false);
});

