import React from 'react';

class Token extends React.Component {


    render() {
        if( this.props.authToken === true) {
            return <div className={"mt-5"}>
                <h3>Token : {this.props.tokenValue.substr(0,20).concat(" ... i tak dalej")}</h3>
                <button className={"btn btn-info"} onClick={this.props.fetchUserData}> testuj token</button>
            </div>
        } else {
            return null;
        }
    }
}

export default Token;