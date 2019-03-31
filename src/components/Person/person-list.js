import React, {PureComponent} from 'react';
import Person from './person'
class PersonList extends PureComponent {

	// shouldComponentUpdate(nextProps){
	// 	return this.props.persons !== nextProps.persons
	// }
	
	render(){
		console.log("list")
		return (
			this.props.persons.map((p,index) => {
					return <Person name={p.name} age={p.age} 
					key={p.id}
					cliked={() => this.props.cliked(p.id)}
					changed={(event) => this.props.updateName(event,p.id)}
					/>
			})
		)
	}
}

export default PersonList