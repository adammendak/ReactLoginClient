import React, { Component } from 'react';
import Header from './components/header.js';
import Token from './components/token.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            tokenValue: "dupa"
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("dupa");
        this.setState({
            isAuthenticated : true
        })
    };

    render() {
        return (
          <div className="App">
              <Header/>
              <br/>
              <div className={"container"}>
                  <div className={"jumbotron"}>
                      <form onSubmit={this.handleSubmit}>
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
                          <input className={"btn btn-success"} type="submit" value="Submit" />
                      </form>
                      <p className={"text-center mt-2"}>Testowe credentiale to Login -> "test", Password -> "test"</p>
                      <p className={"text-center"}>link do repo <a href={"https://github.com/adammendak/ReactLoginClient"}>tutaj</a> </p>
                      <Token authToken={this.state.isAuthenticated}
                             tokenValue={this.state.tokenValue}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
