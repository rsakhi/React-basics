import React from 'react';
import Person from './person'
const PersonList = (props) => {
    return (
        props.persons.map((p,index) => {
            return <Person name={p.name} age={p.age} key={p.id}
            cliked={() => props.cliked(p.id)}
            changed={(event) => props.updateName(event,p.id)}
            />
          })
    )
}

export default PersonList