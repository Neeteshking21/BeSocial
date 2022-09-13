import React, { Component } from "react";
import { Box, TextField, Button } from '@mui/material';
import './index.css';
import axios from "axios";

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }


    /***********************************************
    | Functions:: Handle Submit and Validate Fields
    /***********************************************
    | 
    */
    validateForm = (data = {}) => {
        let username = document.getElementById("loginUsername").value
        let password = document.getElementById("loginPassword").value
        if (username.length <= "6") {
            return true
        }
        return false
    }

    submitHandler = (event) => {
        // Let The Form Validate Otherwise Give An Error.
        if (this.validateForm()) {
            console.log("fetch")
            let url = 'http://127.0.0.1:8080/login?payload=1'
            axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                url: url,
                data: {
                    "test": 123
                }
            })
                .then((response) => {
                    this.showError("this is an error")
                }).catch((error) => {
                    console.warn(error)
                })
        }
    }

    render() {
        return (
            <React.Fragment>
            
                <div id="LoginFormContainer" className="h-screen">
                    <div id="" className="grid place-content-center h-96 ">
                        <div id="LoginForm" className="backdrop-blur-sm bg-white/30 h-72 rounded-lg">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="loginUsername" className="loginCredentials" label="Username" variant="standard" /><br />
                                <TextField id="loginPassword" className="loginCredentials" label="Password" variant="standard" /><br />
                                <Button id="loginSubmit" variant="contained" onClick={this.submitHandler}>Log In</Button><br />
                            </Box>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm