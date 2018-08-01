import React, { Component } from 'react';
import Header from './components/header.js';
import Token from './components/token.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authToken: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("dupa");
        this.setState({
            authToken : true
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
                      <Token token={this.state.authToken}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
