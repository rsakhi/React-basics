import React from 'react'

const person = (props) => {
        return (<div className="person">
        {props.name} | {props.age}
      </div>)
}

export default person;