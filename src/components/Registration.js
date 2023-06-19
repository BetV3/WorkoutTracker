import React, { useState } from "react";
import axios from "axios";


const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log(formData)
        try {
            const response = await axios.post('http://10.0.1.108:3000/register', formData);
            console.log(response.data);
        } catch(err) {
            console.log(err);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Register'}
                </button>
            </form>
        </div>
    )
};

export default Registration;