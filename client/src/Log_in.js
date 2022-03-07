import React, { useState } from 'react';
import './App.css';

export default function Log_in() {
    const [loginMessage, setLoginMessage] = useState("Not Logged In.");

    const toggleButtonState = (id) => {
        fetch("http://localhost:9001/users/" + id)
            .then((response) => response.json())
            .then((response) => {
                setLoginMessage(`Hello, ${response}`);
            })
            .catch(() => {
                setLoginMessage("No User Found.");
            });
    };

    return (
        <div>
            <div>
                <button onClick={toggleButtonState.bind(this, 1)}> Log In </button>
            </div>
            <div>
                <p> {loginMessage} </p>
            </div>
        </div>);
}