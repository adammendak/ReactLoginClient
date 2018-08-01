import React from 'react';

class Token extends React.Component {
    render() {
        if( this.props.authToken === true) {
            return <div className={"mt-5"}>
                <h3>Token : {this.props.tokenValue}</h3>
            </div>
        } else {
            return null;
        }
    }
}

export default Token;