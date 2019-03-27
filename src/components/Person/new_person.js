import React from 'react'

const newPerson = (props) => {
    return (
        <div id="newPerson" className="person">
            <label>Name</label>
            <input type="text" id="name"></input><br/>
            <label>Age</label>
            <input type="number" id="age"></input><br/>
            <button onClick={props.addPersonClick}> Save</button>
        </div>
    )
}

export default newPerson