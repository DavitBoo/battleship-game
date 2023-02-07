const Gameboard = require("../src/gameboard");

test.only('if board is empty', () => {
    expect(Gameboard().isBoardEmpty()).toEqual(true);
  });