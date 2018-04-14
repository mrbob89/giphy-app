import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="main-headline">Giphy App</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
