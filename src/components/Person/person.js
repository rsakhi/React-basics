import React from 'react'

const person = (props) => {
        return (<div className="person" onClick={props.cliked}>
        {props.name} | {props.age}
      </div>)
}
export default person;