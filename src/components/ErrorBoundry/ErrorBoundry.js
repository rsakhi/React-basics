import React, {Component} from 'react'
import { from } from "rxjs";

class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMsg: ""
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: ture, errorMsg: info})
    }

    render(){
        if(this.state.hasError){
            return ("Something went wrong")
        }else{
            return this.props.children
        } 
    }
}

export default ErrorBoundry