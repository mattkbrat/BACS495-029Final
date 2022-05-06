import './App.css';
import {useContext} from "react";

import {Context} from './UserContext'


export default function MyHeader(){

    const { user } = useContext(Context);

    return (
            <div>
            <header className="App-header">
                <a className="heart" target="_self"
                    href='/'
                    rel="noopener noreferrer"
                >🎓
                </a>
                <input type="text" placeholder="🔍 Search..." name="search"/>
                <div>
                    {user ?
                        <a className="heart" target="_self"
                           href='/logout'
                           rel="noopener noreferrer">
                            <button>
                                Logout
                            </button>
                        </a> :
                        <a className="heart" target="_self"
                            href='/login'
                            rel="noopener noreferrer">
                            <button>
                                Login
                            </button>
                        </a>
                    }
                </div>
            </header>
            </div>
        );
    }

