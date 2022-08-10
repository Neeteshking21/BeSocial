import React, { Component } from "react";
import LoginForm from "./LoginForm";
// import './index.css'

class index extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <React.Fragment>
            <LoginForm></LoginForm>
            </React.Fragment>
        )
    }
}

export default index