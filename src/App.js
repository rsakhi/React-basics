import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/person'

class App extends Component {
  state = {
    person: [{name: "rohit", age: "26"},
    {name: "rohit", age: "26"},
    {name: "rohit", age: "26"}]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <Person />
      </div>
    );
  }
}

export default App;
