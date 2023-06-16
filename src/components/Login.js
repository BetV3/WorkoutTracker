import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            email,
            password
        };

        try {
            const response = await axios.post('/login', loginData);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }

    };
return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type='submit'>Login</button>
        </form>
    </div>
    );
};

export default Login;