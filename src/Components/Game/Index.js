import React from 'react';
import {Board} from '../Board/Index'
const styles = {
  padding: 20,
  border: '1px solid #000'
}
export class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board" style = {styles}>
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }