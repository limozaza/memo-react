import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    personnes : [
        {name:"Zakaria", age:"32"},
        {name:"Kassym", age:"2"},
        {name:"Adil", age:"17"}
    ],
    personnes0 : [
      {id:"1", name:"Zakaria", age:"32"},
      {id:"2",name:"Kassym", age:"2"},
      {id:"3",name:"Adil", age:"17"}
    ],
    showPersons: false
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

 togglePersonHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({
     showPersons: !doesShow
   })
 }
 deletePersonHandler = (personIndex) => {
  const persons = [...this.state.personnes0];
  persons.splice(personIndex, 1);
  this.setState({personnes0: persons});
 }
 nameChangedHandlerBis = (event, id) => {
   const personIndex = this.state.personnes0.findIndex(p => {
      return p.id === id;
   });
   const person= { ...this.state.personnes0[personIndex] };
   person.name = event.target.value;

   const persons = [...this.state.personnes0];
   persons[personIndex] = person;

   this.setState({
     personnes0: persons
   })
 }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let personnes = null;

    if(this.state.showPersons){
      personnes = (
        <div>
         {this.state.personnes0.map((p,i)=>{
          return (
            <Person
            click={() => this.deletePersonHandler(i)} 
            changed={(event) => this.nameChangedHandlerBis(event,p.id)}
            key={p.id} 
            name={p.name} 
            age={p.age}
            />
          );
         })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.personnes0.length<=2){
      classes.push('red');
    }
    if(this.state.personnes0.length<=1){
      classes.push('bold');
    }
      
        

    return (
      <div className="App">
          <h1>Bonjour React</h1>
          <button 
          onClick={() => this.switchNameHandler("adilou")}
          style={style}
          key='a'
          >Switch Name</button>
          <Person name={this.state.personnes[0].name} age={this.state.personnes[0].age}/>
          <Person 
          click={() => this.switchNameHandler("adilou")} 
          name={this.state.personnes[1].name} 
          age={this.state.personnes[1].age}
          changed={this.nameChangedHandler}
          >Mon fils</Person>
          <Person name={this.state.personnes[2].name} age={this.state.personnes[2].age}/>
          <hr/>
          <h1 className={classes.join(' ')}>React  02</h1>
          <button style={style} key='4' onClick={this.togglePersonHandler}>toggle Persons</button>
          {personnes}
        </div>
      
    );
  }
}

export default App;
