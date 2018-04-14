import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import View from './containers/View';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="main-headline">Find your favourite GIF</h1>
        <SearchBar />
        <View />
      </div>
    );
  }
}

export default App;
