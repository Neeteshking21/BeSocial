import React, { Component } from "react"
import axios from "axios"

class Authentication extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                email: '',
                password: ''
            },
            error: {
                message: '',
                code: ''
            },
            isloading: false,
            isLoginMode: true,

            errors: {
                email: '',
                password: ''
            }
        }
    }
}