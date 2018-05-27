import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    personnes : [
        {name:"Zakaria", age:"32"},
        {name:"Kassym", age:"2"},
        {name:"Adil", age:"17"}
    ]
  }

  switchNameHandler = () => {
    console.log('ok')
  }

  render() {
    return (
      <div className="App">
        <h1>Bonjour React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.personnes[0].name} age={this.state.personnes[0].age}/>
        <Person name={this.state.personnes[1].name} age={this.state.personnes[1].age}>Mon fils</Person>
        <Person name={this.state.personnes[2].name} age={this.state.personnes[2].age}/>
      </div>
    );
  }
}

export default App;
