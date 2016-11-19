'use strict';

+function() {
  // declare a new angular module called ticTacToeApp
  angular.module('ticTacToeApp', []);

  class TicTacToeController {
    constructor() {
      console.log('TicTacToeController is alive!');
      this.game = new TicTacToeGame();
      this.game.reset();
    }
    isTaken(cell) {
      return cell !== '?';
    }
  }

  angular.module('ticTacToeApp')
  .component('ticTacToe', {
    templateUrl: 'tic-tac-toe.html',
    controller: TicTacToeController
  });
}();
