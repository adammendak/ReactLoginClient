function authenticate(login, password, isAuthenticated) {

    if (isAuthenticated === true) {
        console.log("in auth service");
        console.log("login: " + login + " password: " + password);

        return fetch("http://localhost:8080/auth/login",
            {
                method : "POST",
                body: JSON.stringify({
                    login: login,
                    password: password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Allow-Control-Allow-Origin': '*'
                },
            })  ;
            // .then(response => {
            //     response.text()
            // });
            // .then(response => {
            //     console.log(response);
            // });

    }
}

export default authenticate;
