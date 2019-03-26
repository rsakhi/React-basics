import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/person'

class App extends Component {
  state = {
    person: [{name: "Joe", age: "26"},
    {name: "Smith", age: "28"},
    {name: "Kevin", age: "30"}]
  }
  
  personList = (
    this.state.person.map(p => {
      return <Person name={p.name} age={p.age}/>
    })
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        {this.personList}
      </div>
    );
  }
}

export default App;
