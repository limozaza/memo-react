import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bonjour React</h1>
        <Person name="Zakaria" age="32"/>
        <Person name="Kassym" age="2">Mon fils</Person>
        <Person name="Adil" age="17"/>
      </div>
    );
  }
}

export default App;
