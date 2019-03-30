import React from 'react';
import '../../containers/App.css'

const person = (props) => {
        return (<div className="Person">
        {props.name} | {props.age}<br/>
        <input type="test" onChange={props.changed} value={props.name}/><br/>
        <button onClick={props.cliked}>Delete</button>
      </div>)
}
export default person;
