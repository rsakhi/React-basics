import React, {useEffect} from 'react';
import Aux from '../HOC/Aux'
import personType from'./Person-modle'
import PersonStyleSheet from './person.module.css'



const person = (props) => {
  useEffect(() => {
    console.log("person");
    return () => {
      console.log("remove")
    }
  },[props.name])
  
  return <Aux><div className={PersonStyleSheet.Person}>
    {props.name} | {props.age}<br/>
    <input type="test" onChange={props.changed} value={props.name}/><br/>
    <button onClick={props.cliked}>Delete</button>
  </div>
  <p>
    Adjacent JSX elements
  </p></Aux>
}

//set DataType of person input
person.propTypes = personType
export default person
