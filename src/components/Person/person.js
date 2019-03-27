import React from 'react'

const person = (props) => {
        return (<div className="person" onClick={props.cliked}>
        {props.name} | {props.age}
        <input type="test" onChange={props.changed} value={props.name}/>
      </div>)
}
export default person;