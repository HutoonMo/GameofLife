import React from "react";

import "./Game.css";

class Game extends React.Component {
  render() {
    const CELL_SIZE = 25;
    const WIDTH = window.innerWidth - 100;
    const HEIGHT = window.innerHeight - 100;
    return (
      <div className="App">
        <h2> GAME OF LIFE </h2>
        <div>
          <div
            className="Grid"
            style={{
              width: WIDTH,
              height: HEIGHT,
              backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
            }}
          />
        </div>
      </div>
    );
  }
}

export default Game;
