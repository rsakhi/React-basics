import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/person'

class App extends Component {
  state = {
    persons: [{id: "11w3e", name: "Joe", age: "2p"},
    {id: "6t6yui",name: "Smith", age: "28"},
    {id: "67ty6u",name: "Kevin", age: "30"}]
  }
  
  clickHandler = (name) => {
    // alert(name)
  }
  
  changeHandler = (event,id) => {
    debugger
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

  render() {
    const personList = (
      this.state.persons.map((p,index) => {
        return <Person name={p.name} age={p.age} key={p.id}
        cliked={() => this.deletePerson(p.id)}
        changed={(event) => this.changeHandler(event,p.id)}
        />
      })
    )

    return (
      <div className="App">
        <header className="App-header">
            {this.props.title}
        </header>
        {personList}
      </div>
    );
  }
}

export default App;
