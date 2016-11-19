let TicTacToeController = {
  $board: null,
  $statusMessage: null,
  game: new TicTacToeGame(),

  showCurrentPlayer: function() {
    this.$statusMessage.text('Current Player: ' + this.game.currentPlayer);
  },

  showWinner: function() {
    this.$statusMessage.text('Player ' + this.game.previousPlayer + ' has won!');
  },

  showCat: function() {
    this.$statusMessage.text('CAT!!!');
  },

  getCell: function(r, c) {
    let id = 'cell' + r + c;
    return $('#' + id);
  },

  move: function(r, c) {
    this.game.move(r, c);
    let $cell = this.getCell(r, c);
    $cell.text(this.game.previousPlayer)
         .addClass(this.game.previousPlayer)
         .prop('disabled', true);
    if (this.game.checkForEndOfGame() === false) {
      this.showCurrentPlayer();
    }
    else if (this.game.winner) {
      this.showWinner();
      $('.cell').prop('disabled', true);   // winner means no more moves
    }
    else {
      this.showCat();
    }
  },

  buildGameBoard: function() {
    for (let r = 0; r < this.game.board.length; r++) {
      let $row = $('<div>');
      for (let c = 0; c < this.game.board[r].length; c++) {
        let id = 'cell' + r + c;
        let $button = $('<button>')
          .addClass('btn btn-lg cell')
          .click( () => this.move(r, c) ) // need a closure here to bind to r and c.
          .attr('id', id)
          .text('?');
        $row.append($button);
      }
      this.$board.append($row);
    }
  },

  reset: function() {
    this.game.reset();
    $('.cell').text('?').removeClass('X O').prop('disabled', false);
    this.showCurrentPlayer();
  }
};

$(function() {
  TicTacToeController.$board = $('#board');
  TicTacToeController.$statusMessage = $('#statusMessage');
  TicTacToeController.buildGameBoard();
  TicTacToeController.reset();
});
