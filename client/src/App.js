import './index.css';

import { useState, useEffect } from 'react';
// import { supabaseClient } from "./supabaseClient";
import Auth from './Auth';
import Account from "./Account";


import MyHeader from './header.js'
import MyFooter from './footer.js'
import Users from './Users.js'
// import Log_in from "./Log_in";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

const aboutMe = { name : "Matt", linkedIn : "https://linkedin.com/in/mattkbrat"}


function App() {
    return (
        <div className="App">
            <MyHeader about={aboutMe}/>
            <Users/>
            <MyFooter myName={aboutMe.name} />
        </div>
    );
}

export default App;


//
// export default () => {
//     const [session, setSession] = useState(null)
//
//     useEffect(() => {
//         setSession(supabaseClient.auth.session())
//
//         supabaseClient.auth.onAuthStateChange((_event, session) => {
//             setSession(session)
//         })
//     }, [])
//
//     return (
//         <div className="container" style={{ padding: '50px 0 100px 0' }}>
//             {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
//         </div>
//     )
// }
