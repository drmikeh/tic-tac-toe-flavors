let TicTacToeGame = require("./model");

describe('After a reset, TicTacToeGame', function () {
  let game = new TicTacToeGame();
  it('should have previousPlayer of X', function () {
    expect(game.previousPlayer).toBe(null);
  });
  it('should have currentPlayer of X', function () {
    expect(game.currentPlayer).toBe('X');
  });
  it('should not be at the end of game', function() {
    expect(game.checkForEndOfGame()).toBe(false);
  });
});

describe('After 1 move, TicTacToeGame', function () {
  let game = new TicTacToeGame();
  game.move(0, 0);
  it('should have a previousPlayer of X', function() {
    expect(game.previousPlayer).toBe('X');
  });
  it('should have currentPlayer of O', function () {
    expect(game.currentPlayer).toBe('O');
  });
  it('should not be at the end of game', function() {
    expect(game.checkForEndOfGame()).toBe(false);
  });
  it('should not have a winner', function() {
    expect(game.winner).toBe(false);
  });
  it('should not have cat', function() {
    expect(game.cat).toBe(false);
  });
});

describe('After X wins diagonally, TicTacToeGame', function () {
  let game = new TicTacToeGame();

  /*
     [ 'X', '?', '?' ]
     [ 'O', 'X', '?' ]
     [ 'O', '?', 'X' ]
  */
  game.move(0, 0);
  game.move(1, 0);
  game.move(1, 1);
  game.move(2, 0);
  game.move(2, 2);

  it('should have previousPlayer of X', function () {
    expect(game.previousPlayer).toBe('X');
  });
  it('should have currentPlayer of X', function () {
    expect(game.currentPlayer).toBe(null);
  });
  it('should be at the end of game', function() {
    expect(game.checkForEndOfGame()).toBe(true);
  });
  it('should have a winner', function() {
    expect(game.winner).toBe(true);
  });
  it('should not have cat', function() {
    expect(game.cat).toBe(false);
  });
});

describe('After O wins across a row, TicTacToeGame', function () {
  let game = new TicTacToeGame();

  /*
     [ '?', 'X', 'X' ]
     [ '?', 'X', '?' ]
     [ 'O', 'O', 'O' ]
  */
  game.move(1, 1);
  game.move(2, 2);
  game.move(0, 2);
  game.move(2, 0);
  game.move(0, 1);
  game.move(2, 1);

  it('should have previousPlayer of O', function () {
    expect(game.previousPlayer).toBe('O');
  });
  it('should have currentPlayer of O', function () {
    expect(game.currentPlayer).toBe(null);
  });
  it('should be at the end of game', function() {
    expect(game.checkForEndOfGame()).toBe(true);
  });
  it('should have a winner', function() {
    expect(game.winner).toBe(true);
  });
  it('should not have cat', function() {
    expect(game.cat).toBe(false);
  });
});

describe('After X wins down a column, TicTacToeGame', function () {
  let game = new TicTacToeGame();

  /*
     [ '?', '?', 'X' ]
     [ '?', 'O', 'X' ]
     [ '?', 'O', 'X' ]
  */
  game.move(0, 2);
  game.move(1, 1);
  game.move(1, 2);
  game.move(2, 1);
  game.move(2, 2);

  it('should have previousPlayer of X', function () {
    expect(game.previousPlayer).toBe('X');
  });
  it('should have currentPlayer of X', function () {
    expect(game.currentPlayer).toBe(null);
  });
  it('should be at the end of game', function() {
    expect(game.checkForEndOfGame()).toBe(true);
  });
  it('should have a winner', function() {
    expect(game.winner).toBe(true);
  });
  it('should not have cat', function() {
    expect(game.cat).toBe(false);
  });
});

describe('After all moves with no winner, TicTacToeGame', function () {
  let game = new TicTacToeGame();

  /*
     [ 'X', 'O', 'X' ]
     [ 'X', 'O', 'X' ]
     [ 'O', 'X', 'O' ]
  */
  game.move(0, 0);
  game.move(1, 1);
  game.move(1, 0);
  game.move(2, 0);
  game.move(0, 2);
  game.move(0, 1);
  game.move(2, 1);
  game.move(2, 2);
  game.move(1, 2);

  it('should have previousPlayer of X', function () {
    expect(game.previousPlayer).toBe('X');
  });
  it('should have currentPlayer of X', function () {
    expect(game.currentPlayer).toBe(null);
  });
  it('should be at the end of game', function() {
    expect(game.checkForEndOfGame()).toBe(true);
  });
  it('should not have a winner', function() {
    expect(game.winner).toBe(false);
  });
  it('should have cat', function() {
    expect(game.cat).toBe(true);
  });
});
