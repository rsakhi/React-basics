import React from 'react';
import WithClass from '../HOC/withClass';

const newPerson = (props) => {
    return (
        <WithClass class="Person">
            <label>Name</label>
            <input type="text" id="name"></input><br/>
            <label>Age</label>
            <input type="number" id="age"></input><br/>
            <button onClick={props.addPersonClick}> Save</button>
        </WithClass>
    )
}

export default newPerson