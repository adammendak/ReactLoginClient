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
            tokenValue: "dopiero Bedzie",
            login: "",
            password: ""
        };
    }

    handleChangeLogin = (event) => {
        this.setState({
            login: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isAuthenticated : true,
            login: event.target.login.value,
            password: event.target.password.value
        })
    };

    render() {
        return (
          <div className="App">
              <Header/>
              <br/>
              <div className={"container"}>
                  <div className={"jumbotron"}>
                      <LoginForm handleSubmit = {this.handleSubmit.bind(this)}
                                 onChange={this.handleChangeLogin.bind(this)}
                      />
                      <p className={"text-center mt-3"}>link do repo na gicie <a href={"https://github.com/adammendak/ReactLoginClient"} target={"blank"}>tutaj</a> </p>
                      <Token authToken={this.state.isAuthenticated}
                             tokenValue={this.state.tokenValue}
                             login={this.state.login}
                             password={this.state.password}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
