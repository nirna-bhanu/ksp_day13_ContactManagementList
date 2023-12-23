
import React, { useState } from 'react';
import { useEffect } from 'react';
function Register_page({ activeForm, onToggleForm }) {

    useEffect(() => {
        console.log('Register component rendered.');
    }, [activeForm]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }


        if (localStorage.getItem(email)) {
            alert("User with this email already exists.");
            return;
        }

        const userData = {
            firstName: firstName,
            lastName: lastName,
            password: password,
        };

        localStorage.setItem(email, JSON.stringify(userData));


        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        await new Promise(resolve => setTimeout(resolve, 500));


        onToggleForm('login-section');
    };

    return (
        <div id="register-section" className={`form-section ${activeForm === 'register-section' ? 'active' : ''}`}>
            <h1>Create Your Account</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" value={firstName} placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} required />
                <label>Last Name</label>
                <input type="text" value={lastName} placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} required />
                <label>Email</label>
                <input type="text" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
                <label>Password</label>
                <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <p>Already have an account? <a href="#" onClick={() => onToggleForm('login-section')}>Login here</a></p>
        </div>
    );
}

export default Register_page;
