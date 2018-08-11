import React, { Component } from 'react';
import Header from './components/header.js';
import Token from './components/token.js';
import LoginForm from './components/loginForm.js';
import './App.css';

const PRODUCTION_LOGIN_URL = "https://authentication-adammendak.herokuapp.com/auth/login";
const DEV_LOGIN_URL =  "http://localhost:8080/auth/login";
const PRODUCTION_GETINFO_URL = "https://authentication-adammendak.herokuapp.com/api/user/getInfo";
const DEV_GETINFO_URL = "http://localhost:8080/api/user/getInfo";
const isProduction = true;

function getLoginUrl() {
        let url;
        if (isProduction === true) {
            url = PRODUCTION_LOGIN_URL;
        } else {
            url = DEV_LOGIN_URL;
        }
        return url;
}

function getUserInfoUrl() {
    let url;
    if (isProduction === true) {
        url = PRODUCTION_GETINFO_URL;
    } else {
        url = DEV_GETINFO_URL;
    }
    return url;
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            tokenValue: "",
            login: "",
            password: "",
            loading: "",
            response: ""
        };
    }

    componentDidUpdate(prevProps) {
        if(this.state.isAuthenticated === true && this.state.tokenValue === "") {

            fetch(getLoginUrl(),
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
                    if(response.ok) {
                        this.setState({
                            tokenValue : response.headers.get('Authentication').split(" ")[1]
                        });
                    } else {
                        alert("wrong credentials !!!");
                        this.setState({
                            isAuthenticated: false,
                            login: "",
                            password: ""
                        });
                    }
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
        fetch(getUserInfoUrl(),
            {
                method : "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Allow-Control-Allow-Origin': '*',
                    'Authentication': 'Bearer ' + this.state.tokenValue
                }
            })
            .then(response => {return response.json()})
            .then(data => {
                this.setState({
                    response: "Login: " + data.login + " /HashPassword: " + data.password
                });
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
                      <p> serwer backendowy stoi na heroku w chmurze, trzeba poczekac okolo 1 minuty po requescie zeby wstal i mozna testowac :)
                          <a href={"https://authentication-adammendak.herokuapp.com/"} target={"blank"}> tutaj jest i on </a></p>
                      <p> użytkownik testowy który działa to login: test password: test </p>
                      <p className={"text-center mt-3"}>link do repo backendu na gicie <a href={"https://github.com/adammendak/SpringBootAuthenticationServer"} target={"blank"}>tutaj</a> </p>
                      <Token authToken={this.state.isAuthenticated}
                             tokenValue={this.state.tokenValue}
                             loading={this.state.loading}
                             response={this.state.response}
                             fetchUserData= {this.fetchUserData.bind(this)}/>
                  </div>
              </div>
          </div>
        );
    }
}

export default App;
