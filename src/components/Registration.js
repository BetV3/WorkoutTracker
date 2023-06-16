import React, { useState } from "react";
import axios from "axios";


const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registrationData = {
            name,
            email,
            password
        };

        try {
            const response = await axios.post('/register', registrationData);
            console.log(response.data);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Registration;