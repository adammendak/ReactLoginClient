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
            tokenValue: "",
            login: "",
            password: ""
        };
    }

    componentDidUpdate(prevProps) {
        if(this.state.isAuthenticated === true && this.state.tokenValue === "") {

            fetch("http://localhost:8080/auth/login",
                {
                    method : "POST",
                    body: JSON.stringify({
                        login: this.state.login,
                        password: this.state.password
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Allow-Control-Allow-Origin': '*'
                    }
                }).then(response => {
                this.setState({
                    tokenValue : response.headers.get('Authentication').split(" ")[1]
                });
                }).catch(err => console.log(err));
        }

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

    fetchUserData = () => {
        fetch("http://localhost:8080/api/user/getInfo",
            {
                method : "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Allow-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + this.state.tokenValue
                }
            }).then(response => {
            console.log(response.text());
            })
            .catch(err => console.log(err));
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
                             fetchUserData= {this.fetchUserData.bind(this)}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
