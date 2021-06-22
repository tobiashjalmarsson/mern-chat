import React, {useState} from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';


function LoginSignupComponent() {
    const [signup, setSignup] = useState(false);
    return (
        <div>
            <h1>LoginSignupComponent</h1>
            {signup ? <SignupForm /> : <LoginForm />}
        </div>
    );
}

export default LoginSignupComponent;
