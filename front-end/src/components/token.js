import React from 'react';

class Token extends React.Component {
    render() {
        if( this.props.authToken === true) {
            return <div className={"mt-5"}>
                <p>UserDTO w requescie <br/>login: {this.props.login} <br/>password: {this.props.password}</p>
                <h3>Token : {this.props.tokenValue}</h3>
            </div>
        } else {
            return null;
        }
    }
}

export default Token;