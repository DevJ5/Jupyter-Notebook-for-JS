import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchValue);
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
