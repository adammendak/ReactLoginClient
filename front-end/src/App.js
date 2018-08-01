import React, { Component } from 'react';
import Header from './components/header.js';
import Token from './components/token.js';
import LoginForm from './components/loginForm.js';
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
                      <LoginForm handleSubmit = {this.handleSubmit.bind(this)}/>
                      <p className={"text-center mt-2"}>Testowe credentiale to Login -> "test", Password -> "test"</p>
                      <p className={"text-center"}>link do repo na gicie <a href={"https://github.com/adammendak/ReactLoginClient"} target={"blank"}>tutaj</a> </p>
                      <Token authToken={this.state.isAuthenticated}
                             tokenValue={this.state.tokenValue}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
