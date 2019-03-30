import React from 'react';
import Person from './person'
const PersonList = (props) => {
    return (
        props.persons.map((p,index) => {
            return <Person name={p.name} age={p.age} key={p.id}
            cliked={() => this.deletePerson(p.id)}
            changed={(event) => this.changeHandler(event,p.id)}
            />
          })
    )
}

export default PersonList