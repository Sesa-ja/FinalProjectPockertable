import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <GameBoard />
      </div>
    );
  }
}
export default App;
