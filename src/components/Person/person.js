import React, {useEffect} from 'react';
import '../../containers/App.css'
import Aux from '../HOC/Aux'
import personType from'./Person-modle'


const person = (props) => {
  useEffect(() => {
    console.log("person");
    return () => {
      console.log("remove")
    }
  },[props.name])
  
  return <Aux><div className="Person">
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
