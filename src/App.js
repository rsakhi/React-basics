import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/person'

class App extends Component {
  state = {
    person: [{name: "Joe", age: "2p"},
    {name: "Smith", age: "28"},
    {name: "Kevin", age: "30"}]
  }
  
  clickHandler = (name) => {
    alert(name)
  }
  

  render() {
    const personList = (
      this.state.person.map(p => {
        return <Person name={p.name} age={p.age}
        cliked={() => this.clickHandler(p.name)}
        changed={this.changeHandler}
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
