import React from 'react';
import LoginIndex from './Authentication/Login/index';
class App extends React.Component {
    showError(msg){
        alert(msg)
    }
    showSuccess(msg){
        alert(msg)
    }

    render() {
        return (
            <React.Fragment>
                <LoginIndex></LoginIndex>
            </React.Fragment>
        )
    }
}

export default App