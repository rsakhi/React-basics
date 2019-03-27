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
  
  changeHandler = (event,index) => {
    debugger
    const person  = [...this.state.persons]
    person[index].name = event.target.value 
    this.setState({persons: person});
  }

  deletePerson = (id) => {
  }

  render() {
    const personList = (
      this.state.persons.map((p,index) => {
        return <Person name={p.name} age={p.age} key={p.id}
        cliked={() => this.deletePerson(p.id)}
        changed={(event) => this.changeHandler(event,index)}
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
