import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  handleRestart = () => {
    console.log('Game restarted');
  };

  handleCheck = () => {
    console.log('Check action triggered');
  };

  render() {
    console.log('App rendered');
    return (
      <div className="app">
        <Sidebar onRestart={this.handleRestart} onCheck={this.handleCheck} />
        <GameBoard />
      </div>
    );
  }
}
export default App;
