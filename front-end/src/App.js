import React, { Component } from 'react';
import Header from './components/header.js';
import Token from './components/token.js';
import LoginForm from './components/loginForm.js';
import authenticate from './services/authenticateService.js';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            tokenValue: "test",
            login: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.login.value === "" || event.target.password.value === "") {
            alert("pola nie moga byc puste");
        } else {
            this.setState({
                isAuthenticated: true,
                login: event.target.login.value,
                password: event.target.password.value
            });
        }
    };

    render() {
        return (
          <div className="App">
              <Header/>
              <br/>
              <div className={"container"}>
                  <div className={"jumbotron"}>
                      <LoginForm handleSubmit = {this.handleSubmit.bind(this) }
                      />
                      <p className={"text-center mt-3"}>link do repo frontu na gicie <a href={"https://github.com/adammendak/ReactLoginClient"} target={"blank"}>tutaj</a> </p>
                      <p className={"text-center mt-3"}>link do repo backendu na gicie <a href={"https://github.com/adammendak/SpringBootAuthenticationServer"} target={"blank"}>tutaj</a> </p>
                      <Token authToken={this.state.isAuthenticated}
                             tokenValue={this.state.tokenValue}
                             login={this.state.login}
                             password={this.state.password}
                             authenticate = {authenticate(this.state.login, this.state.password, this.state.isAuthenticated)}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
