import React from 'react'

const newPerson = (props) => {
    return (
        <div id="newPerson" className="person">
            <input type="text" id="name"></input>
            <input type="number" id="age"></input>
            <button onClick={props.addPersonClick}> Save</button>
        </div>
    )
}

export default newPerson