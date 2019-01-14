import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import seed from './Seed'

class App extends Component {

  tileData = seed;

  render() {
    return (
      <div>
        <Header />
        <Main data={this.tileData} />
      </div>
    );
  }
}

export default App;
