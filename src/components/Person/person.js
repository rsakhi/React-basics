import React from 'react'

const person = (props) => {
        return (<div className="person">
        {props.name} | {props.age}<br/>
        <input type="test" onChange={props.changed} value={props.name}/><br/>
        <button onClick={props.cliked}>Delete</button>
      </div>)
}
export default person;