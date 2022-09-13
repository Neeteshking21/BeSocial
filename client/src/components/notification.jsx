import React, { Component } from "react";
import { Box, LinearProgress, Alert } from '@mui/material';

export class notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notification: {
                progressBar: 0,
                type: '',
                message: ''
            }
        }
    }
    /* Lifecyle Methods */
    componentDidMount() {
        this.progressHandler()
    }
    componentDidUpdate(prevProps, prevStats) {
        this.progressHandler()
    }

    progressHandler() {
        const timer = setInterval(() => {
            /* setState Function Used For Change The Values of 'state' Variables */
            this.setState((prevState) => {
                progressLevel = 0;
                if (prevState.notification.progressBar >= 100) {
                    return { progressBar: 0 }
                }

                return { progressBar: prevState.notification.progressBar + 20 }
            })
        }, 200)
    }

    render() {
        return (
            <React.Fragment>
                <Box sx={{ width: '100%' }}>
                    <Alert severity={this.props.type}>{this.props.message}</Alert>
                    <LinearProgress variant="determinate" value={this.state.notification.progressBar} />
                </Box>
            </React.Fragment>
        )
    }
}