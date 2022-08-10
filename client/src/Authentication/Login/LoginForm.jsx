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

        if(username.length <= "6"){
            
        }
    }
    
    submitHandler = (event) => {
        // Let The Form Validate Otherwise Give An Error.
        if (validateForm()){
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
                    console.log(response)
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
                            <form onSubmit={this.submitHandler}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="loginUsername" class="loginCredentials" label="Username" variant="standard" /><br />
                                    <TextField id="loginPassword" class="loginCredentials" label="Password" variant="standard" /><br />
                                    <Button id="loginSubmit" variant="contained" onClick={this.submitHandler}>Log In</Button><br />
                                </Box>

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginForm