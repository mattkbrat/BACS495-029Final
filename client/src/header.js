import './App.css';
import './header.css';
import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import {Context} from './UserContext'


export default function MyHeader(){
    let navigate = useNavigate();

    const { user, setUser } = useContext(Context);

    const logOut = () => {
        setUser(null);
        navigate("/")
    }

    return (
            <div>
            <header className="App-header">
                <Link to='/' className="heart"
                    rel="noopener noreferrer"
                >🎓
                </Link>
                <input type="text" placeholder="🔍 Search..." name="search"/>
                <div>
                    {user? (
                        <nav className="navigation-menu">
                            <ul>
                                <li><button onClick={logOut}>Logout</button></li>
                                <li><Link to="/questions"><button>Questions</button></Link></li>
                            </ul>
                        </nav>
                    ) : (
                        <nav className="navigation-menu">
                            <ul>
                                <li><Link to="/login"><button>Login</button></Link></li>
                            </ul>
                        </nav>
                    )}
                    <br/>
                    <p></p>
                </div>
            </header>
            </div>
        );
    }

