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

test('position is marked as a hit after an attack', () => {
  expect(Gameboard().placeShip(3, 5, 'v', 4).receiveAttack(3, 8)).toEqual('hit');
});

test('if ships are sunk', () => {
  expect(Gameboard().placeShip(3, 0, 'h', 2).allSunk()).toEqual(false);
});

test('if ships are sunk with one out of two sunk', () => {
  const board = Gameboard();
  board.placeShip(0, 3, 'v', 3);
  board.placeShip(0, 5, 'h', 2);
  const attacks = [[0, 3], [1, 3], [2, 3], [0, 5]];
  attacks.forEach((attack) => board.receiveAttack(attack[0], attack[1]));
  expect(board.allSunk()).toEqual(false);
});

test('if ships are sunk with one out of 1 sunk', () => {
  const board = Gameboard();
  board.placeShip(9, 8, 'h', 2);
  board.receiveAttack(9, 8);
  board.receiveAttack(9, 9);
  expect(board.allSunk()).toEqual(true);
});

test('if ships are sunk with three out of three sunk', () => {
  const board = Gameboard();
  board.placeShip(8, 1, 'v', 2);
  board.placeShip(2, 7, 'h', 3);
  board.placeShip(4, 2, 'v', 4);
  const attacks = [[8, 1], [8, 2], [2, 7], [3, 7], [4, 7], [4, 2], [4, 3], [4, 4], [4, 5]];
  attacks.forEach((attack) => board.receiveAttack(attack[0], attack[1]));
  expect(board.allSunk()).toEqual(true);
});