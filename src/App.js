import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
import axios from 'axios';

const StyledButton = styled.button`
background-Color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'red'};
  color: black;
}
`;

class App extends Component {
  state = {
    persons: [
    { id:'1234', name: ' ', lastname: ' '},
  ],
  showPersons: false
}


deletePerson = (personIndex) =>{
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

nameChange = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person={

    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;
  person.lastname = event.target.key;

  const persons =[...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons: persons} );
}
render() {
const style ={
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  ':hover':{
    backgroundColor: 'lightgreen',
    color:'black'
  }
};



let persons = null;

if (this.state.showPersons) {
  persons = (
    <div >
      {this.state.persons.map((person, index) => {
        return <Person
        click={() => this.deletePerson(index)}
        name={person.name}
        lastname={person.lastname}
        key={person.id}
        changed={(event) => this.nameChange(event,person.id)}
        diff={(event) => this.nameChange(event,person.id)} />
      })}


      
</div> 
  );

}

this.togglePersons = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

const classes = [];
if (this.state.persons.length <=2 ) {
  classes.push('red');
}
if (this.state.persons.length <=1){
  classes.push('bold');
}




      return (

      <div className="App">
        <h1>Login</h1>
        <p className={classes.join(' ')}>Login Page</p>
        
        <StyledButton alt={this.state.showPersons}
         onClick={this.togglePersons}>Log In</StyledButton>
        {persons}
        
      </div>
      );
  };
}

export default App;

