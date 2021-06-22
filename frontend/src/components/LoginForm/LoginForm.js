import React, {useState} from 'react';
import {Login} from './LoginFormAPI';

function LoginForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log("testing turnary")

        // register ? console.log("it is true") : console.log("It is false")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username: ", username);
        console.log("password: ", password);
        Login(username, password);
        // LoginRequest
        // url: http://localhost:3000/auth/login
    }

    return (
        <div>
            <h2>Login Component</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleUsernameChange}/>
                <input type="text" value={password} onChange={handlePasswordChange}/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
