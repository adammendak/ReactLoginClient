import React from 'react';
import spinner from '../spinner.png';

class Token extends React.Component {


    render() {
        if( this.props.authToken === true) {
            if (this.props.tokenValue === "") {
                return <div>
                    Loading...<br/>
                    <img className={"spinnerImg"} src={spinner} alt={"loading spinner"}/>
                </div>
            } else {
                return <div className={"mt-5"}>
                    <h3>Token : {this.props.tokenValue.substr(0, 20).concat(" ... i tak dalej")}</h3>
                    <button className={"btn btn-info mt-3"} onClick={this.props.fetchUserData}> testuj token</button>
                    <p>dane uzytkownika z serwera: <br/>
                        {this.props.response.split("/")[0]} <br/>
                        {this.props.response.split("/")[1]} <br/>
                    </p>
                </div>
            }
        } else {
            return null;
        }
    }
}

export default Token;