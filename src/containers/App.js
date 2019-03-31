import React, { Component } from 'react';
import AppClasses from './App.module.css';
import PersonList from '../components/Person/person-list'
import NewPerson from '../components/Person/new_person';
import Radium from 'radium'

class App extends Component {
  state = {
    persons: [{id: "11w3e", name: "Joe", age: 22},
    {id: "6t6yui",name: "Smith", age: 12},
    {id: "67ty6u",name: "Kevin", age: 30}],
    showNewUserCart: false
  }
  
  clickHandler = (name) => {
    // alert(name)
  }
  
  componentWillMount() {
    console.log("mounted")
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
    debugger
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const id = "7yefe7"
    const newPerson = {name: name, age: age, id: id}
    const person = [newPerson, ...this.state.persons]
    debugger
    this.setState({persons: person})
  }

  toggleCart = () => {
    const showcart = this.state.showNewUserCart
    this.setState({showNewUserCart: !showcart})
  }

  componentWillUnmount(){
		console.log("unmounted App")
	}

  render() {
    const floatLeft = { float: "left" }

    const floatRight = { float: "right"}
    
    const personList = (
      <PersonList persons={this.state.persons}
      cliked={this.deletePerson}
      updateName={this.changeHandler}></PersonList>
    )

    return (
      <div className={AppClasses.App}>
        <header className={AppClasses.AppHeader}>
            {this.props.title}
        </header>
        <div>
          <div style={floatRight}> 
            <button className={AppClasses.btn} onClick={this.toggleCart}>Add New User</button>
             {this.state.showNewUserCart ? <NewPerson addPersonClick={this.addNewPerson}/> : null}
          </div>
          <div style={floatLeft}>{personList}</div>
        </div>
      </div>
    );
  }
}

export default Radium(App);
