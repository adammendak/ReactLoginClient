import React from 'react';

class LoginForm extends React.Component {

    render() {
        return <form onSubmit={this.props.handleSubmit}>
            <div className={"form-group row justify-content-center"}>
                <label htmlFor="loginField" className="col-2 col-form-label">Login</label>
                <div className="col-10">
                    <input className="form-control" type="text" id="loginField"/>
                </div>
            </div>
            <div className={"form-group row justify-content-center"}>
                <label htmlFor="passwordField" className="col-2 col-form-label">Password</label>
                <div className="col-10">
                    <input className="form-control" type="password" id="passwordField"/>
                </div>
            </div>
            <input className={"btn btn-success"} type="submit" value="Submit"/>
        </form>
    }
}

export default LoginForm;