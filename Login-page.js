
import React, { useState } from 'react';

function Login({ onToggleForm, onLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidLogin = true;

        if (isValidLogin) {
            onLogin(email);
            onToggleForm('some-other-section');
        } else {

            alert('Invalid credentials. Please try again.');
        }
    };



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    id="l-email"
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    id="l-password"
                    required
                />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#" id="reg" onClick={() => onToggleForm('register-section')}>Register here</a></p>
        </div>
    );
}

export default Login;
