import React from 'react';
import withClass from '../HOC/withClass';
import PersonStyleSheet from './person.module.css'


const newPerson = (props) => {
    return (
        <React.Fragment>
            <label>Name</label>
            <input type="text" id="name"></input><br/>
            <label>Age</label>
            <input type="number" id="age"></input><br/>
            <button onClick={props.addPersonClick}> Save</button>
        </React.Fragment>
    )
}

export default withClass(newPerson, PersonStyleSheet.Person)