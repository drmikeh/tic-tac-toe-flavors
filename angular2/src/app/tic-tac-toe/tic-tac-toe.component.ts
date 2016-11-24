import { Component, OnInit } from '@angular/core';
let TicTacToeGame = require('../../../../common/model');

@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  game = new TicTacToeGame();

  constructor() {
    console.log('TicTacToeComponent is alive!');
    this.game.reset();
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  isTaken(cell) {
    return cell !== '?';
  }
}
