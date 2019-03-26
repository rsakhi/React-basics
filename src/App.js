import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: [{name: "rohit"}]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React
        </header>
        <div className="person">
          Rohit Sakhi
        </div>
      </div>
    );
  }
}

export default App;
