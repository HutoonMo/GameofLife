import React from "react";

import "./Game.css";
import { Cell } from "./Cell";
import { Button } from "./Button";

const CELL_SIZE = 24;
const WIDTH = 500;
const HEIGHT = 400;
const ROWS = 20;
const COLS =  20;
export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generations: 0,
      board: Array(COLS)
        .fill()
        .map(x => Array(ROWS).fill(0))
    };
    // bind (this) key word to the hlpr functions
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.Start = this.Start.bind(this);
  }
  // create an empty board
  handleReset() {
    const newBoard = Array(COLS)
      .fill()
      .map(x => Array(ROWS).fill(0));
    this.pauseButton();
    this.setState({ board: newBoard, generations: 0 });
  }
  // handle clicks on the board
  handleClick(x, y) {
    //fill the cell only if it's empty
    const tempBoard = this.state.board;
    if (this.state.board[x][y] === 0) {
      //1 represents that the cell is full
      tempBoard[x][y] = 1;
    }else{ //if cell is full, empty it
      tempBoard[x][y] = 0;
    }
    
    this.setState({ board: tempBoard });
  }
  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.Start);
  };
  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  Start() {
    const currentBoard = this.state.board;
    //get deep copy of the board as it is the next state of the board, to make updates on it not the original
    var currentBoard2 = JSON.parse(JSON.stringify(this.state.board));
// loop through each cell and get its nighbors count and check against the rules of game of life.
    for (let x = 0; x < ROWS; x++) {
      for (let y = 0; y < COLS; y++) {
        let cell = currentBoard2[x][y];
        let neighborsCount = this.countNeighbors(currentBoard, x, y);
        if (cell === 0 && neighborsCount === 3) {
          currentBoard2[x][y] = 1;
        } else if (cell === 1 && (neighborsCount < 2 || neighborsCount > 3)) {
          currentBoard2[x][y] = 0;
        } else {
          currentBoard2[x][y] = cell;
        }
      }
    }
    //change the board to the next state and update the generations count
    this.setState({
      board: currentBoard2,
      generations: this.state.generations + 1
    });
 
  }
  countNeighbors(board, x, y) {
    let total = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + COLS) % COLS;
        let row = (y + j + ROWS) % ROWS;
        total += board[col][row];
      }
    }
    total -= board[x][y];
    return total;
  }

  render() {
    const Boardstyle = {
      textAlign: "center",
      margin: "auto",
      height: HEIGHT + "px",
      width: WIDTH + "px",
      border: "5px solid ",
      borderColor: `red blue green yellow`,
      tableLayout: "fixed"
    };
    const b = this.state.board;
    const board = b.map((row, i) => {
      return (

        <tr key={"row_" + i}>
          {row.map((col, j) => {
            const color = b[i][j] !== 0 ? "white" : "black";
            return (
              <Cell
                handleClick={() => this.handleClick(i, j)}
                color={color}
                CELL_SIZE={CELL_SIZE}
                key={i + "_" + j}
              />
            );
          })}
         
        </tr>
        

      );
    });
    return (
      <div>
        <table style={Boardstyle} cellSpacing="0">
          <tbody>{board}
         
          </tbody>
          {console.log(this.state.board)}
          
        </table>
        <h7 id="h7"> Generation:{this.state.generations} </h7>
        <Button
          handleReset={this.handleReset}
          start={this.playButton}
          pause={this.pauseButton}
        />
       
      </div>
    );
  }
}

export default Game;
