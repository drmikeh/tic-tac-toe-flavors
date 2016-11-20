import React, { Component } from 'react';
import TicTacToeGame from '../../common/model';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../common/app.css';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new TicTacToeGame()
    };
  }
  reset() {
    this.state.game.reset();
    this.setState({
      game: this.state.game
    });
  }
  move(event) {
    const [ r, c ] = event.target.id.split('-');
    this.state.game.move(r, c);
    // TODO: there has got to be a better way?
    this.setState({
      game: this.state.game
    });
  }
  getStatusMessage() {
    let statusMessage;
    if (!this.state.game.checkForEndOfGame()) {
      statusMessage = <h4>Current Player: {this.state.game.currentPlayer}</h4>;
    }
    else if (this.state.game.winner) {
      statusMessage = <h4>Winner: {this.state.game.previousPlayer}</h4>;
    }
    else {
      statusMessage = <h4>CAT!</h4>
    }
    return statusMessage;
  }
  render() {
    let endOfGame = this.state.game.checkForEndOfGame();
    let rowIndex = 0;
    let rows = this.state.game.board.map( row => {
      let colIndex = 0;
      let inner = row.map( c => {
        let id = '' + rowIndex + '-' + colIndex;
        let cell = this.state.game.board[rowIndex][colIndex];
        let classes = 'btn-lg cell';
        if (cell !== '?') {
          classes += ' ' + cell;
        }
        let disabled = endOfGame || cell !== '?';
        let clickHandler = disabled ? null : this.move.bind(this);
        let button = <button
                       onClick={clickHandler}
                       //  disabled={disabled}
                       id={id}
                       key={'cell' + id}       // ???
                       className={classes}> {cell}</button>
        ++colIndex;
        return button;
      });
      return <div key={rowIndex++}>{inner}</div>;
    });

    return (
      <div className="tic-tac-toe">
        <h1>Tic-Tac-Toe</h1>
        {rows}
        <hr/>
        {this.getStatusMessage()}
        <button onClick={this.reset.bind(this)}>New Game</button>
      </div>
    );
  }
}

export default TicTacToe;
