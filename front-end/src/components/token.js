import React from 'react';

class Token extends React.Component {
    render() {
        if( this.props.token === true) {
            return <div className={"mt-5"}>
                <h3>Token jest :{this.props.token}</h3>
            </div>
        } else {
            return null;
        }
    }
}

export default Token;