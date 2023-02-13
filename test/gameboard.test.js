const Gameboard = require("../src/gameboard");

test('if board is empty', () => {
  expect(Gameboard().checkBoard('empty')).toEqual(true);
});

test('empty position on x-axis', () => {
  expect(Gameboard().checkBoard(1, 3, 'h', 4)).toEqual(true);
});

test('passed invalid position by x-axis', () => {
  expect(Gameboard().checkBoard(10, 3, 'h', 4)).toBe(false);
});

test('passed invalid position by length on x-axis', () => {
  expect(Gameboard().checkBoard(7, 9, 'h', 4)).toBe(false);
});
  
test('empty position on y-axis', () => {
  expect(Gameboard().checkBoard(8, 1, 'v', 2)).toEqual(true);
});

test('passed invalid position by y-axis', () => {
  expect(Gameboard().checkBoard(4, 11, 'v', 2)).toBe(false);
});

test('passed invalid position by length on y-axis', () => {
  expect(Gameboard().checkBoard(9, 8, 'v', 3)).toBe(false);
});

test('board is NOT empty', () => {
  expect(Gameboard().placeShip(0, 0, 'v', 4).checkBoard('empty')).toEqual(false);
});

test('position is NOT empty', () => {
  expect(Gameboard().placeShip(7, 2, 'h', 3).checkBoard(7, 2, 'h', 3)).toEqual(false);
});

test('position is avaliable', () => {
  expect(Gameboard().placeShip(9, 0, 'v', 4).checkBoard('board')).toEqual(true);
});

test('position is marked as a miss after an attack', () => {
  expect(Gameboard().receiveAttack(4, 4)).toEqual('miss');
});