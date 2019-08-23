import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
function App() {
  const CELL_SIZE = 20;const WIDTH = 800;const HEIGHT = 600;

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
