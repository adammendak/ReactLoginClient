function authenticate(login, password, isAuthenticated) {

    if (isAuthenticated === true) {
        console.log("in auth service");
        console.log("login: " + login + "password: " + password);

        fetch("http://localhost:8080/api/test",
            {
                testMessage: "asd"
            })
            .then(response => response.text())
            .then(response => console.log(response));

    }
}

export default authenticate;
