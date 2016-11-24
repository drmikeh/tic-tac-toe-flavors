import { Component, OnInit } from '@angular/core';
let TicTacToeGame = require('../../../../common/model');

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  game = new TicTacToeGame();

  constructor() {
    console.log('TicTacToeComponent is alive!');
    this.game.reset();
  }
  isTaken(cell) {
    return cell !== '?';
  }
}
