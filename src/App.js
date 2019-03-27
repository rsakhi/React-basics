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
    // alert(name)
  }
  
  changeHandler = (index,event) => {
    const person = [...this.state.person]
    person[index].name = "jjj"
    this.setState(person = person);
  }

  render() {
    const personList = (
      this.state.person.map((p,index) => {
        return <Person name={p.name} age={p.age}
        cliked={() => this.clickHandler(p.name)}
        changed={(event) => this.changeHandler(index)}
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
