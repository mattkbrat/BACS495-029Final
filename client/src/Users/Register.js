import React, {useState} from 'react';
import axios from "axios";

const Register = (props) => {
    //   id: String,
    //   name: String,
    //   email: String,
    //   password: String,
    //   phone: String,
    //   university: String

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [university, setUniversity] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const postUser = (e) => {
        e.preventDefault();
        setLoading(true);
        const uri = process.env.REACT_APP_API_URL+'/users';
        let insert = {
            'name': name,
            'email': email,
            'password': password,
            'phone': phone,
            'university': university
        };

        console.log("insert: ", insert);

        axios.post(uri, insert)
            .then(res=> console.log(res.data)) //res.data is the response from the server
            .then(() => setError(''))  //clear error message
            .then(() => props.notifyParent()) //refresh the list
            .catch(err=> setError(err.response.data)) //set error message
            .finally(()=> setLoading(false)); //set loading to false
    }

    return (
        <div className="form" aria-live="polite">
            <h2>Register</h2>
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
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <div className="input-field">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                required
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                id="university"
                                name="university"
                                placeholder="University"
                                required
                                value={university}
                                onChange={e => setUniversity(e.target.value)}
                            />
                        </div>
                        <div className="action">
                            <button className="button block primary" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                                <br/>
                                {name + ' ' + email + ' ' + password + ' ' + phone + ' ' + university}
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

export default Register;