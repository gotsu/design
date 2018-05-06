import React, { Component } from 'react';
import { IconBookmark, IconPencil } from 'react-gotsu-icons';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <IconBookmark width="40px" fill="skyblue" />
          <IconPencil width=" 40px" fill="pink" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
