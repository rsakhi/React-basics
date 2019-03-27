import React from 'react'

const person = (props) => {
        return (<div className="person">
        {props.name} | {props.age}
        <input type="test" onChange={props.changed} value={props.name}/>
        <button onClick={props.cliked}>Delete</button>
      </div>)
}
export default person;