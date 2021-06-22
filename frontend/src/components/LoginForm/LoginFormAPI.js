const login_url = "http://localhost:3000/auth/login";


export function Login(username, password){
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: password
        }),
    }

    // Connect to databse
    fetch(login_url, request).
        then(async response => {
            // Get the data from the response and store as
            // JSON
            const data = await response.json(); 
        })
        .catch(error => {
            console.log(error);
        })
}
