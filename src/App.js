import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bonjour React</h1>
        
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
