/*
Login form
 */

import React, {useContext, useState} from 'react';
import {Context} from "../UserContext";
import axios from "axios";

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { setUser, setLoggedIn } = useContext(Context);

    const postUser = (e) => {
        e.preventDefault();
        setLoading(true);
        const uri = process.env.REACT_APP_API_URL+'/users';

        // /users/:userId/books/:bookId
        axios.get(uri+'/'+email+'/'+password)
            .then(res => setUser(res.data[2])) // set user in context
            .then(() => setError(''))  //clear error message
            .then(() => setLoggedIn(true)) // set logged in to true
            .catch(() => console.log(error)) //set error message
            .finally(()=> setLoading(false)); //set loading to false
    }

    return (
        <div className="form" aria-live="polite">
            <h2>Log In</h2>
            {loading ? (
                'Submitting user...'
            ) : (
                <form onSubmit={postUser} className="form-widget">
                    <div className="content">
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <div className="action">
                            <button className="button block primary" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </form>
            )}
            <div className="container">
                {error ? 'Error: ' + error : ''}
            </div>
        </div>
    )
}

export default LogIn;
