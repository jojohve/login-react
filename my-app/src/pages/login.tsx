import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/users');
        const users = await response.json();
        const user = users.find((user: { username: string, password: string }) => user.username === username && user.password === password);
        if (user) {
            alert('Login eseguito!');
            navigate('/home');
        } else {
            alert('Login errato');
        }
    };

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={validate}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}