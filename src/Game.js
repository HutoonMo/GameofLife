import React from "react";

import "./Game.css";
import { Cell } from "./Cell";
import { Button } from "./Button";

const CELL_SIZE = 25;
const WIDTH = 600;
const HEIGHT = 500;

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(20)
        .fill()
        .map(x => Array(20).fill("+"))
    };
    // bind this key word to the hlpr functions
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  // create an empty grid
  handleReset() {
    const newBoard = Array(20)
      .fill()
      .map(x => Array(20).fill("+"));
    this.setState({ board: newBoard });
  }
  // handle clicks on the board 
  handleClick(x, y) {
    //fill the cell only if it's empty
    if (this.state.board[x][y] === "+") {
      const tempBoard = this.state.board;
      //c represents that the cell is not empty
      tempBoard[x][y] = "c";
      this.setState({ board: tempBoard });
    }
  }

  render() {
    const Boardstyle = {
      textAlign: "center",
      margin: "auto",
      height: HEIGHT+"px",
      width: WIDTH+"px",
      border: "5px solid ",
      borderColor: `red blue green yellow`,
      tableLayout: "fixed"
    };
    const b = this.state.board;
    const board = b.map((row, i) => {
      return (
        <tr key={"row_" + i}>
          {row.map((col, j) => {
            const color = b[i][j] !== "+" ? "white" : "black";
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
        <tbody>{board}</tbody>
       { console.log(this.state.board)}
       
      </table>
<Button handleReset={this.handleReset}/>
      </div>
    );
  }
}

export default Game;
