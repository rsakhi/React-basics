import React, { Component } from 'react';
import './App.css';
import PersonList from './components/Person/person-list'
import NewPerson from './components/Person/new_person';
import Radium from 'radium'

class App extends Component {
  state = {
    persons: [{id: "11w3e", name: "Joe", age: "2p"},
    {id: "6t6yui",name: "Smith", age: "28"},
    {id: "67ty6u",name: "Kevin", age: "30"}],
    showNewUserCart: false
  }
  
  clickHandler = (name) => {
    // alert(name)
  }
  
  changeHandler = (event,id) => {
    const personIndex  = this.state.persons.findIndex(a => a.id === id)
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons});
  }

  deletePerson = (id) => {
    const person = this.state.persons.filter(per => per.id !== id)
    this.setState({persons: person});
  }

  addNewPerson = (event) => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const id = "7yefe7"
    const newPerson = {name: name, age: age, id: id}
    const person = [newPerson, ...this.state.persons]
    this.setState({persons: person})
  }

  toggleCart = () => {
    const showcart = this.state.showNewUserCart
    this.setState({showNewUserCart: !showcart})
  }

  render() {
    const styleForPerson = {
      float: "left"
    }

    const styleForNewPerson = {
      float: "right"
    }
    const buttonStyle = {
      width: '70px',
      backgroundColor: 'rgb(183, 183, 231)',
      border: '2px solid rgb(115, 115, 216)',
      padding: '4px',
      borderRadius: '150px',
      ':hover': {backgroundColor: 'rgb(115, 115, 216)'}
    }
    const personList = (
      <PersonList persons={this.state.persons}></PersonList>
    )

    return (
      <div className="App">
        <header className="App-header">
            {this.props.title}
        </header>
        <div>
          <div style={styleForNewPerson}> 
            <button style = {buttonStyle} onClick={this.toggleCart}>Add New User</button>
             {this.state.showNewUserCart ? <NewPerson addPersonClick={this.addNewPerson}/> : null}
          </div>
          <div style={styleForPerson}>
            {personList}
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(App);
