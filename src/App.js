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

  switchNameHandler = (newName) => {
    this.setState({
      personnes : [
        {name:"sofia", age:"31"},
        {name:"Kassym", age:"2"},
        {name:newName, age:"17"}
    ]
    })
  }

 nameChangedHandler = (event) =>{
    this.setState({
      personnes : [
        {name:"sofia", age:"31"},
        {name:"Kassym", age:"2"},
        {name:event.target.value, age:"17"}
    ]
    })
 } 

  render() {
    return (
      <div className="App">
        <h1>Bonjour React</h1>
        <button onClick={() => this.switchNameHandler("adilou")}>Switch Name</button>
        <Person name={this.state.personnes[0].name} age={this.state.personnes[0].age}/>
        <Person 
        click={() => this.switchNameHandler("adilou")} 
        name={this.state.personnes[1].name} 
        age={this.state.personnes[1].age}
        changed={this.nameChangedHandler}
        >Mon fils</Person>
        <Person name={this.state.personnes[2].name} age={this.state.personnes[2].age}/>
      </div>
    );
  }
}

export default App;
